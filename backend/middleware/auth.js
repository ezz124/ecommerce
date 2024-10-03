import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "Not Authorized. Login Again" });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      // Token has expired, refresh the token
      const refreshToken = req.headers['x-refresh-token'];
      if (!refreshToken) {
        return res.json({ success: false, message: "Token has expired. Please login again" });
      }

      try {
        const newToken = jwt.refreshToken(refreshToken, process.env.JWT_SECRET);
        res.json({ success: true, token: newToken });
      } catch (refreshError) {
        console.log(refreshError);
        res.json({ success: false, message: "Failed to refresh token" });
      }
    } else {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  }
};

export default authUser;