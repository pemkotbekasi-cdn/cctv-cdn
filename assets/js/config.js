const v=new URLSearchParams(window.location.search).get("u"),h=window.location.href.split("?u=")[1];if(p2pml.hlsjs.Engine.isSupported()){const e={segments:{forwardSegmentCount:50},loader:{cachedSegmentExpiration:864e5,cachedSegmentsCount:1e3,requiredSegmentsPriority:3,httpDownloadMaxPriority:9,httpDownloadProbability:.06,httpDownloadProbabilityInterval:1e3,httpDownloadProbabilitySkipIfNoPeers:!0,p2pDownloadMaxPriority:50,httpFailedSegmentTimeout:1e3,simultaneousP2PDownloads:20,simultaneousHttpDownloads:3,httpDownloadInitialTimeout:12e4,httpDownloadInitialTimeoutPerSegment:17e3,httpUseRanges:!0,trackerAnnounce:["wss://tracker.openwebtorrent.com","wss://tracker.files.fm:7073/announce","wss://tracker.btorrent.xyz","wss://spacetradersapi-chatbox.herokuapp.com:443/announce","ws://tracker.files.fm:7072/announce"],rtcConfig:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:global.stun.twilio.com:3478?transport=udp"},{urls:"stun:stun.powerpbx.org:3478"}]}}};var engine=new p2pml.hlsjs.Engine(e);p2pml.hlsjs.initVideoJsHlsJsPlugin();var player=videojs("video",{html5:{hlsjsConfig:{liveSyncDurationCount:3,loader:engine.createLoaderClass()}}});player.src({src:h})}else document.write("Source Not Supported");