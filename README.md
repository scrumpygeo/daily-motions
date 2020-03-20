# Introduction

A user: https://api.dailymotion.com/user/x1fz4ii
A video: https://api.dailymotion.com/video/x26ezrb
A playlist: https://api.dailymotion.com/playlist/x3ecgj

https://api.dailymotion.com/videos?list=what-to-watch

GET https://api.dailymotion.com/videos?list=what-to-watch&fields=channel.name%2Cthumbnail_url%2Cid%2Ctitle

GET https://api.dailymotion.com/videos?fields=channel.name%2Cthumbnail_url%2Cid%2Ctitle&search=cats

```
<iframe frameborder="0" width="480" height="270"
src="//www.dailymotion.com/embed/video/VIDEO_ID?PARAMS"
allowfullscreen allow="autoplay"></iframe>


        data.list.map(datum => {
            datum.channel.name
            datum.thumbnail_url
            datum.id     <-- same as VIDEO_ID in iframe above
            datum.title

        })

```
