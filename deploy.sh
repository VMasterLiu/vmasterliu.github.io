# 自动部署脚本

# 构建
npm run build
# 导航到构建输出目录
cd dist

# 发布到自定义域名
echo 'blog.bytecoding.net' > CNAME

git init
git add -A
git commit -m 'deploy'

# 推到仓库的 master 分支
git push -f git@github.com:paulfliu/paulfliu.github.io.git master
