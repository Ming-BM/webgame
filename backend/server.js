const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// 中间件
app.use(cors());
app.use(express.json());

// 连接 MongoDB - 使用环境变量或本地默认值
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/character-game';
console.log('🔍 正在尝试连接 MongoDB...');
console.log('🔍 MONGODB_URI 前20个字符:', MONGODB_URI.substring(0, 20));
mongoose.connect(MONGODB_URI);

const db = mongoose.connection;
db.on('error', (err) => console.log('❌ MongoDB连接失败:', err));
db.once('open', () => console.log('✅ MongoDB连接成功！'));

// 导入路由
const characterRoutes = require('./routes/character');

// 注册路由
app.get('/api/test', (req, res) => {
  res.json({ message: '后端服务器运行正常！' });
});

app.use('/api/characters', characterRoutes);  // ← 添加角色路由

// 启动服务器 - 使用环境变量或本地默认值
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 服务器运行在 http://localhost:${PORT}`);
});