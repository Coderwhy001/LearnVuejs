# 改变url不刷新页面的两种方式
history.pushState({}, '', 'url')
location.hash('url')
history.replaceState({}, '', 'url')
history.back() = history.go(-1)