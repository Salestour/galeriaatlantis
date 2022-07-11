(function(){
    var script = {
 "definitions": [{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_D7ACC278_CDEB_BE47_41E2_C43CA4EAD972.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_D7ACC278_CDEB_BE47_41E2_C43CA4EAD972.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_D7ACC278_CDEB_BE47_41E2_C43CA4EAD972",
 "data": {
  "label": "Ahrix - Nova"
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -157.04,
  "pitch": -14.69
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F9870253_EE16_7213_41ED_B388D0B42750",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -155.25,
   "backwardYaw": 32.24,
   "distance": 1,
   "panorama": "this.panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -155.25,
   "backwardYaw": 32.24,
   "distance": 1,
   "panorama": "this.panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "galeria f14",
 "class": "Panorama",
 "id": "panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B",
 "thumbnailUrl": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DE0647E6_CBA7_C64A_41E0_F46E0DB8FD8B",
  "this.overlay_DCE16AE3_CBA6_4E4A_41E3_123A8B862E46",
  "this.panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_tcap0"
 ]
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463",
   "camera": "this.panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2",
   "camera": "this.panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC",
   "camera": "this.panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A",
   "camera": "this.panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D",
   "camera": "this.panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D",
   "camera": "this.panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6",
   "camera": "this.panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA",
   "camera": "this.panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788",
   "camera": "this.panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139",
   "camera": "this.panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C",
   "camera": "this.panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -8.39,
   "backwardYaw": -167.52,
   "distance": 1,
   "panorama": "this.panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "galeria f6",
 "class": "Panorama",
 "id": "panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A",
 "thumbnailUrl": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D830ABD0_CBA5_CE46_41D4_7888EED7CD10",
  "this.overlay_DDCDEA3D_CBBD_CE3E_41CC_BBD32CFE77FC",
  "this.panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_tcap0"
 ]
},
{
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_D465668E_C485_B467_4129_919D8298F0D8",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_rotation"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 33.75,
   "backwardYaw": -158.52,
   "distance": 1,
   "panorama": "this.panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "galeria f9",
 "class": "Panorama",
 "id": "panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6",
 "thumbnailUrl": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D8922A3E_CBAD_CE3A_41DB_8A7AE6B606D0",
  "this.overlay_DDF16AE2_CBBE_CE4B_41CE_98DE6FA1654B",
  "this.panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "galeria f 8",
 "class": "Panorama",
 "id": "panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D",
 "thumbnailUrl": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DC9101FC_CBAA_5A3F_41E4_FCD1B57D681D",
  "this.overlay_DCBE4CE8_CBAE_CA47_41D5_983CEFFC4ADC",
  "this.panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_tcap0"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 21.89,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F93E3176_EE16_4E12_41EB_1A222A27721A",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -157.04,
  "pitch": -14.69
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F9B6823B_EE16_7213_41E7_91C465C47C89",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "galeria f2",
 "class": "Panorama",
 "id": "panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2",
 "thumbnailUrl": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D90EB21C_CBE6_D9FE_41CB_0997D5C35125",
  "this.overlay_D34DEBEB_CBAA_CE59_41E5_783F20B2EF0C",
  "this.panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_tcap0"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.14,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F9CAA1D9_EE16_4E1E_41EB_7FD5D3A65302",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 22.96,
  "pitch": -8.27
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F89BC0A6_EE16_4E32_41D3_F450258C28C4",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 22.96,
  "pitch": -8.27
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8812085_EE16_4EF7_41D3_2856FC214091",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 34.9,
  "pitch": -25.71
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8B46063_EE16_4E32_41EB_D0C5F3A72EE9",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 22.96,
  "pitch": -8.27
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F89710C8_EE16_4E7D_41C5_D94AD6E9FEB0",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 19.43,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F91CF1A1_EE16_4E2E_41CE_6D5F381B42C7",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F9ECC1B4_EE16_4E16_41E2_7EBFD243DFD6",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -147.76,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F97F10FE_EE16_4E15_41C1_9AFD98D348AA",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -167.52,
   "backwardYaw": -8.39,
   "distance": 1,
   "panorama": "this.panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "galeria f7",
 "class": "Panorama",
 "id": "panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D",
 "thumbnailUrl": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D8CB6E8B_CBAB_C6DA_41D6_C3F7E6346B28",
  "this.overlay_DDCD0ACE_CBBF_CE5A_41BA_D73645A443EC",
  "this.panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -158.52,
   "backwardYaw": 33.75,
   "distance": 1,
   "panorama": "this.panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 9.54,
   "backwardYaw": -158.11,
   "distance": 1,
   "panorama": "this.panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "galeria f10",
 "class": "Panorama",
 "id": "panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA",
 "thumbnailUrl": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DF51EAAE_CBAF_CEDA_41D1_6C96608B4611",
  "this.overlay_DE997C07_CBBA_49CA_41BE_DCAA97F87781",
  "this.panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_tcap0"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -147.76,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F962A0E9_EE16_4E3F_41E3_2813B2B91450",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "galeria f1",
 "class": "Panorama",
 "id": "panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463",
 "thumbnailUrl": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DBB246FF_CBEA_463A_41E2_8E358BEC92AF",
  "this.panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_tcap0"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -158.11,
   "backwardYaw": 9.54,
   "distance": 1,
   "panorama": "this.panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 11.86,
   "backwardYaw": -160.57,
   "distance": 1,
   "panorama": "this.panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "galeria f11",
 "class": "Panorama",
 "id": "panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788",
 "thumbnailUrl": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DFC7451A_CBAD_DBFB_41E3_77BD8414233A",
  "this.overlay_DE98CDEC_CBBA_4A5F_41BC_3820565532C8",
  "this.panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_tcap0"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "galeria f4",
 "class": "Panorama",
 "id": "panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC",
 "thumbnailUrl": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_D96753E6_CB9E_7E4B_41DD_8D3E5ACB02DA",
  "this.overlay_DC4B9F42_CBBA_C64B_41E3_3F870318B331",
  "this.panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_tcap0"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 10.43,
   "backwardYaw": -142.98,
   "distance": 1,
   "panorama": "this.panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -160.57,
   "backwardYaw": 11.86,
   "distance": 1,
   "panorama": "this.panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "galeria f12",
 "class": "Panorama",
 "id": "panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139",
 "thumbnailUrl": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DFC9C06B_CBAB_FA59_41D4_43D431DBBFB7",
  "this.overlay_DECC3333_CBBA_5FC9_41BC_69ED1730FB10",
  "this.panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_tcap0"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 35.82,
  "pitch": 4.59
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F9A89200_EE16_4DEE_41B2_210BAF7B0D20",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 37.02,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F9FA51C7_EE16_4E72_41EA_B312BDE4B511",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 32.24,
   "backwardYaw": -155.25,
   "distance": 1,
   "panorama": "this.panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -142.98,
   "backwardYaw": 10.43,
   "distance": 1,
   "panorama": "this.panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139"
  }
 ],
 "hfovMin": "135%",
 "hfov": 360,
 "label": "galeria f13",
 "class": "Panorama",
 "id": "panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C",
 "thumbnailUrl": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_t.jpg",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "frames": [
  {
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_DF879B1E_CBAA_4FFA_41E5_08263BC5C2F2",
  "this.overlay_DEBF948F_CBBA_7ADA_41D4_65E3A137EC02",
  "this.panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_tcap0"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 12.48,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F64332AD_EE16_7237_41EA_F4F661150A0E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -45.92,
  "pitch": -4.59
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8BDE041_EE16_4E6E_41EB_E40C5F747D79",
 "automaticZoomSpeed": 10
},
{
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_E1EF8C64_EE16_5636_41CB_FBFB906E71DB.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_E1EF8C64_EE16_5636_41CB_FBFB906E71DB.ogg"
 },
 "class": "MediaAudio",
 "id": "audio_E1EF8C64_EE16_5636_41CB_FBFB906E71DB",
 "data": {
  "label": "galeria atlantis audio"
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 21.48,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F995726F_EE16_7233_4182_1114133C7F9D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 171.61,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F94AD111_EE16_4FEF_41D5_77F135B7DC69",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 35.82,
  "pitch": 4.59
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F9D811EC_EE16_4E36_41E9_2DF0EEF9BEBB",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "id": "ThumbnailList_D68BACD6_C48D_F5E7_41BE_BAE86D7ADCFE_playlist",
 "items": [
  {
   "media": "this.panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463",
   "camera": "this.panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_D68BACD6_C48D_F5E7_41BE_BAE86D7ADCFE_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2",
   "camera": "this.panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_D68BACD6_C48D_F5E7_41BE_BAE86D7ADCFE_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC",
   "camera": "this.panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_D68BACD6_C48D_F5E7_41BE_BAE86D7ADCFE_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A",
   "camera": "this.panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_D68BACD6_C48D_F5E7_41BE_BAE86D7ADCFE_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D",
   "camera": "this.panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_D68BACD6_C48D_F5E7_41BE_BAE86D7ADCFE_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D",
   "camera": "this.panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_D68BACD6_C48D_F5E7_41BE_BAE86D7ADCFE_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6",
   "camera": "this.panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_D68BACD6_C48D_F5E7_41BE_BAE86D7ADCFE_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA",
   "camera": "this.panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_D68BACD6_C48D_F5E7_41BE_BAE86D7ADCFE_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788",
   "camera": "this.panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_D68BACD6_C48D_F5E7_41BE_BAE86D7ADCFE_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139",
   "camera": "this.panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_D68BACD6_C48D_F5E7_41BE_BAE86D7ADCFE_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C",
   "camera": "this.panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_D68BACD6_C48D_F5E7_41BE_BAE86D7ADCFE_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B",
   "camera": "this.panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_D68BACD6_C48D_F5E7_41BE_BAE86D7ADCFE_playlist, 11, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -67.96,
  "pitch": -4.59
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F952D141_EE16_4E6F_41ED_B00DAC17AC0B",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 24.75,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F6656282_EE16_72ED_41ED_9B8DA483DBB5",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -146.25,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F921815E_EE16_4E15_41CB_2C931A81DED5",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 143.57,
  "pitch": 5.56
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "targetPitch": 5.56,
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 3000,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0
  }
 ],
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "yaw": 143.57,
  "stereographicFactor": 1,
  "pitch": -90
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -67.96,
  "pitch": -4.59
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F947C127_EE16_4E33_41DC_EFAB1A8783DD",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -169.57,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F6729295_EE16_7217_41E4_3EA37B504AE0",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 35.82,
  "pitch": 4.59
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F9B9721C_EE16_7216_41D0_FE1BFCE7345D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.46,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F90ED18E_EE16_4EF2_41E3_9C5873A1429E",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -45.92,
  "pitch": -4.59
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "camera_F8A06019_EE16_4E1E_41DC_088FA6904EC8",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 },
 "class": "PanoramaCamera",
 "id": "panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_camera",
 "automaticZoomSpeed": 10
},
{
 "playbackBarHeadShadowVerticalLength": 0,
 "transitionDuration": 500,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "left": 0,
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 50,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "top": 0,
 "bottom": "0%",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "class": "ViewerArea",
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "borderRadius": 0,
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipShadowSpread": 0,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadShadowHorizontalLength": 0
},
{
 "children": [
  "this.Container_CA21D85B_C48D_DCED_41D6_77206EB84DFA"
 ],
 "id": "Container_CB661D43_C484_D4DD_41E1_248C85BB2D4F",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "bottom": "0%",
 "minWidth": 1,
 "width": "100%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "height": "14.973%",
 "shadow": false,
 "data": {
  "name": "Container Inferior"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "horizontal"
},
{
 "children": [
  "this.Container_CAD4F683_C484_745D_41E2_2AF0B2B1E4DC",
  "this.Container_CAF562F9_C484_ADAD_4196_2F50A1BAADD1"
 ],
 "id": "Container_CA6EA08A_C48C_EC6F_41E7_A602ACC8FEDB",
 "left": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "top": "0%",
 "paddingRight": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "27.808%",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "height": "90.047%",
 "shadow": false,
 "data": {
  "name": "Container Esquerdo"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "children": [
  "this.IconButton_D465668E_C485_B467_4129_919D8298F0D8",
  "this.IconButton_CB0917B8_C485_D3AB_41DF_2ADB73C6100A",
  "this.IconButton_D4F92038_C49B_ACAB_41E6_96B27D79D9E9"
 ],
 "id": "Container_CBFFFAFF_C4BC_BDA5_41E4_FF9621011F5B",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "right": "0%",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "right",
 "top": "0%",
 "paddingRight": 28,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "8.605%",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 39,
 "paddingTop": 10,
 "contentOpaque": false,
 "paddingBottom": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Container Direito"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "overflow": "scroll",
 "scrollBarWidth": 10,
 "layout": "vertical"
},
{
 "transparencyActive": true,
 "maxHeight": 128,
 "maxWidth": 128,
 "toolTipShadowVerticalLength": 0,
 "toolTipBorderColor": "#767676",
 "id": "IconButton_D4F92038_C49B_ACAB_41E6_96B27D79D9E9",
 "toolTipOpacity": 1,
 "horizontalAlign": "right",
 "toolTipFontSize": 12,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "toolTipShadowBlurRadius": 3,
 "borderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 30,
 "toolTipPaddingBottom": 4,
 "iconURL": "skin/IconButton_D4F92038_C49B_ACAB_41E6_96B27D79D9E9.png",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "paddingRight": 0,
 "toolTipShadowColor": "#333333",
 "verticalAlign": "middle",
 "minWidth": 30,
 "toolTipBorderSize": 1,
 "mode": "toggle",
 "toolTipPaddingRight": 6,
 "paddingLeft": 0,
 "toolTipPaddingLeft": 6,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingTop": 4,
 "toolTipBorderRadius": 3,
 "paddingTop": 0,
 "toolTipFontStyle": "normal",
 "toolTipShadowOpacity": 1,
 "paddingBottom": 0,
 "height": "17.223%",
 "shadow": false,
 "toolTipTextShadowOpacity": 0,
 "data": {
  "name": "IconButton1493"
 },
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTip": "Fullscreen",
 "borderRadius": 0,
 "cursor": "hand",
 "toolTipShadowHorizontalLength": 0,
 "toolTipShadowSpread": 0
},
{
 "transparencyActive": true,
 "id": "IconButton_CB0917B8_C485_D3AB_41DF_2ADB73C6100A",
 "horizontalAlign": "right",
 "pressedRollOverIconURL": "skin/IconButton_CB0917B8_C485_D3AB_41DF_2ADB73C6100A_pressed_rollover.png",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 30,
 "iconURL": "skin/IconButton_CB0917B8_C485_D3AB_41DF_2ADB73C6100A.png",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 30,
 "mode": "toggle",
 "paddingLeft": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_CB0917B8_C485_D3AB_41DF_2ADB73C6100A_pressed.png",
 "paddingBottom": 0,
 "height": "13.884%",
 "shadow": false,
 "data": {
  "name": "Button37509"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C, this.camera_F97F10FE_EE16_4E15_41C1_9AFD98D348AA); this.mainPlayList.set('selectedIndex', 10); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.24,
   "image": "this.AnimatedImageResource_E3B3BAC4_EDFA_7276_41C6_84A990D24439",
   "pitch": -50.73,
   "yaw": -155.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DE0647E6_CBA7_C64A_41E0_F46E0DB8FD8B",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.24,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -50.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.08,
   "image": "this.AnimatedImageResource_E3B3DAC5_EDFA_7276_41DE_D35A7CCD9E68",
   "pitch": -21.48,
   "yaw": 23.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DCE16AE3_CBA6_4E4A_41E3_123A8B862E46",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 23.08,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_1_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.48
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_tcap0.png",
    "width": 3240,
    "class": "ImageResourceLevel",
    "height": 3240
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 90,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D, this.camera_F64332AD_EE16_7237_41EA_F4F661150A0E); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.05,
   "image": "this.AnimatedImageResource_E3CC8AC0_EDFA_726D_41A1_0E940353C8F0",
   "pitch": -11.45,
   "yaw": -8.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D830ABD0_CBA5_CE46_41D4_7888EED7CD10",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 22.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -8.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.18,
   "image": "this.AnimatedImageResource_E3CCAAC1_EDFA_726F_41AF_3C42492A76A5",
   "pitch": -31.5,
   "yaw": -148.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DDCDEA3D_CBBD_CE3E_41CC_BBD32CFE77FC",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 19.18,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -148.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.5
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_tcap0.png",
    "width": 3240,
    "class": "ImageResourceLevel",
    "height": 3240
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 90,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "transparencyActive": false,
 "maxHeight": 56,
 "maxWidth": 56,
 "id": "IconButton_D465668E_C485_B467_4129_919D8298F0D8",
 "horizontalAlign": "right",
 "borderSize": 0,
 "width": "83.582%",
 "minHeight": 30,
 "iconURL": "skin/IconButton_D465668E_C485_B467_4129_919D8298F0D8.png",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 30,
 "mode": "push",
 "paddingLeft": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "paddingBottom": 0,
 "height": "8.847%",
 "shadow": false,
 "data": {
  "name": "IconButton14318"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA, this.camera_F995726F_EE16_7233_4182_1114133C7F9D); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.24,
   "image": "this.AnimatedImageResource_E3CDBAC2_EDFA_726D_41EB_FD35A5391D14",
   "pitch": -19.23,
   "yaw": 33.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D8922A3E_CBAD_CE3A_41DB_8A7AE6B606D0",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 21.24,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.72,
   "image": "this.AnimatedImageResource_E3CDFAC2_EDFA_726D_41E2_3A3AAB31447C",
   "pitch": -38.05,
   "yaw": -158.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DDF16AE2_CBBE_CE4B_41CE_98DE6FA1654B",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.72,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.05
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_tcap0.png",
    "width": 3240,
    "class": "ImageResourceLevel",
    "height": 3240
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 90,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6, this.camera_F9B9721C_EE16_7216_41D0_FE1BFCE7345D); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 6); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.25,
   "image": "this.AnimatedImageResource_E3CC4AC1_EDFA_726F_41ED_8B5B9402588F",
   "pitch": -8.59,
   "yaw": -80.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DC9101FC_CBAA_5A3F_41E4_FCD1B57D681D",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 22.25,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -80.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D, this.camera_F9870253_EE16_7213_41ED_B388D0B42750); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.35,
   "image": "this.AnimatedImageResource_E3CC6AC2_EDFA_726D_41CC_00163DA47C52",
   "pitch": -18.41,
   "yaw": 127.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DCBE4CE8_CBAE_CA47_41D5_983CEFFC4ADC",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 21.35,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 127.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.41
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_tcap0.png",
    "width": 3240,
    "class": "ImageResourceLevel",
    "height": 3240
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 90,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC, this.camera_F8B46063_EE16_4E32_41EB_D0C5F3A72EE9); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.11,
   "image": "this.AnimatedImageResource_E3CFCABF_EDFA_7213_41C5_D9FED810FAFD",
   "pitch": -19.64,
   "yaw": 26.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D90EB21C_CBE6_D9FE_41CB_0997D5C35125",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 26.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463, this.camera_F8BDE041_EE16_4E6E_41EB_E40C5F747D79); this.mainPlayList.set('selectedIndex', 0); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.01,
   "image": "this.AnimatedImageResource_E3CFEAC0_EDFA_726D_41B1_E5B52DE551A3",
   "pitch": -36.82,
   "yaw": -140.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D34DEBEB_CBAA_CE59_41E5_783F20B2EF0C",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.01,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -140.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -36.82
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_tcap0.png",
    "width": 3240,
    "class": "ImageResourceLevel",
    "height": 3240
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 90,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D, this.camera_F952D141_EE16_4E6F_41ED_B00DAC17AC0B); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.24,
   "image": "this.AnimatedImageResource_E3CCEAC1_EDFA_726F_41E7_F17FAAD8865E",
   "pitch": -12.27,
   "yaw": 4.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D8CB6E8B_CBAB_C6DA_41D6_C3F7E6346B28",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.24,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A, this.camera_F94AD111_EE16_4FEF_41D5_77F135B7DC69); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.93,
   "image": "this.AnimatedImageResource_E3CC0AC1_EDFA_726F_41E5_34ED7D889576",
   "pitch": -32.73,
   "yaw": -167.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DDCD0ACE_CBBF_CE5A_41BA_D73645A443EC",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.73
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_tcap0.png",
    "width": 3240,
    "class": "ImageResourceLevel",
    "height": 3240
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 90,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788, this.camera_F93E3176_EE16_4E12_41EB_1A222A27721A); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.1,
   "image": "this.AnimatedImageResource_E3CD0AC2_EDFA_7272_41E3_7159A2E7264A",
   "pitch": -11.25,
   "yaw": 9.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DF51EAAE_CBAF_CEDA_41D1_6C96608B4611",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.1,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6, this.camera_F921815E_EE16_4E15_41CB_2C931A81DED5); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.79,
   "image": "this.AnimatedImageResource_E3CD5AC2_EDFA_7272_41D1_827D2404D271",
   "pitch": -22.5,
   "yaw": -158.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DE997C07_CBBA_49CA_41BE_DCAA97F87781",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 20.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.5
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_tcap0.png",
    "width": 3240,
    "class": "ImageResourceLevel",
    "height": 3240
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 90,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2, this.camera_F89710C8_EE16_4E7D_41C5_D94AD6E9FEB0); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 1); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 03"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.81,
   "image": "this.AnimatedImageResource_E3CEAABF_EDFA_7213_41CD_6390DBAEB741",
   "pitch": -27.61,
   "yaw": 142.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DBB246FF_CBEA_463A_41E2_8E358BEC92AF",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 22.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 142.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_1_HS_1_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.61
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_tcap0.png",
    "width": 3240,
    "class": "ImageResourceLevel",
    "height": 3240
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 90,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139, this.camera_F91CF1A1_EE16_4E2E_41CE_6D5F381B42C7); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01c"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.95,
   "image": "this.AnimatedImageResource_E3CD6AC2_EDFA_7272_41C4_CFE93D855757",
   "pitch": -16.98,
   "yaw": 11.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DFC7451A_CBAD_DBFB_41E3_77BD8414233A",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.95,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA, this.camera_F90ED18E_EE16_4EF2_41E3_9C5873A1429E); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.62,
   "image": "this.AnimatedImageResource_E3B2BAC3_EDFA_7272_41D2_078BEAD30838",
   "pitch": -38.45,
   "yaw": -158.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DE98CDEC_CBBA_4A5F_41BC_3820565532C8",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 17.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -38.45
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_tcap0.png",
    "width": 3240,
    "class": "ImageResourceLevel",
    "height": 3240
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 90,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.setCameraSameSpotAsMedia(this.camera_F9ECC1B4_EE16_4E16_41E2_7EBFD243DFD6, this.panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC); this.startPanoramaWithCamera(this.panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A, this.camera_F9ECC1B4_EE16_4E16_41E2_7EBFD243DFD6); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.88,
   "image": "this.AnimatedImageResource_E3CF2AC0_EDFA_726D_41E4_40BC4CFEB92A",
   "pitch": -14.11,
   "yaw": 32.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D96753E6_CB9E_7E4B_41DD_8D3E5ACB02DA",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 20.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.08,
   "image": "this.AnimatedImageResource_E3CF4AC0_EDFA_726D_41D3_8E69F7A06089",
   "pitch": -20.45,
   "yaw": -167.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DC4B9F42_CBBA_C64B_41E3_3F870318B331",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 21.08,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.45
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_tcap0.png",
    "width": 3240,
    "class": "ImageResourceLevel",
    "height": 3240
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 90,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C, this.camera_F9FA51C7_EE16_4E72_41EA_B312BDE4B511); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.22,
   "image": "this.AnimatedImageResource_E3B2FAC3_EDFA_7272_41CE_3D645B3C95BC",
   "pitch": -9,
   "yaw": 10.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DFC9C06B_CBAB_FA59_41D4_43D431DBBFB7",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 22.22,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 10.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788, this.camera_F9CAA1D9_EE16_4E1E_41EB_7FD5D3A65302); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.57,
   "image": "this.AnimatedImageResource_E3B21AC3_EDFA_7272_41B2_5E0D3791E3ED",
   "pitch": -34.36,
   "yaw": -160.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DECC3333_CBBA_5FC9_41BC_69ED1730FB10",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.57,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -34.36
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_tcap0.png",
    "width": 3240,
    "class": "ImageResourceLevel",
    "height": 3240
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 90,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B, this.camera_F6656282_EE16_72ED_41ED_9B8DA483DBB5); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.46,
   "image": "this.AnimatedImageResource_E3B25AC4_EDFA_7276_41ED_A3D3E2E7CAB4",
   "pitch": -22.5,
   "yaw": 32.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DF879B1E_CBAA_4FFA_41E5_08263BC5C2F2",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_1_HS_0_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139, this.camera_F6729295_EE16_7217_41E4_3EA37B504AE0); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Arrow 01a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.93,
   "image": "this.AnimatedImageResource_E3B27AC4_EDFA_7276_41E0_05CB71DAAC49",
   "pitch": -32.73,
   "yaw": -142.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DEBF948F_CBBA_7ADA_41D4_65E3A137EC02",
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -142.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.73
  }
 ]
},
{
 "rotate": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_tcap0.png",
    "width": 3240,
    "class": "ImageResourceLevel",
    "height": 3240
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 90,
 "class": "TripodCapPanoramaOverlay",
 "id": "panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "children": [
  "this.ThumbnailList_D68BACD6_C48D_F5E7_41BE_BAE86D7ADCFE"
 ],
 "id": "Container_CA21D85B_C48D_DCED_41D6_77206EB84DFA",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "width": "100%",
 "paddingLeft": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Container2302"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "layout": "horizontal"
},
{
 "children": [
  "this.Image_C4B0AB86_CB6A_CECA_41E3_B5F613A07E54"
 ],
 "id": "Container_CAD4F683_C484_745D_41E2_2AF0B2B1E4DC",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "82.515%",
 "paddingLeft": 10,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 10,
 "contentOpaque": false,
 "paddingBottom": 0,
 "height": "34.715%",
 "shadow": false,
 "data": {
  "name": "LOGO CLIENTE"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "layout": "absolute"
},
{
 "children": [
  "this.IconButton_CB43F41B_C484_546D_41E7_25753E48123C",
  "this.IconButton_CB49F62E_C48B_B4A7_41D8_7652E8A2DBAC",
  "this.IconButton_D4C5BC86_C484_D467_41D7_FA32751F1CC5",
  "this.IconButton_CB4C696C_C48B_DCAB_41E1_A783E0EC40DB"
 ],
 "id": "Container_CAF562F9_C484_ADAD_4196_2F50A1BAADD1",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "width": "83.062%",
 "paddingLeft": 37,
 "class": "Container",
 "backgroundOpacity": 0,
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "height": "60.104%",
 "shadow": false,
 "data": {
  "name": "REDES SOCIAIS"
 },
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "overflow": "scroll",
 "propagateClick": false,
 "layout": "vertical"
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3B3BAC4_EDFA_7276_41C6_84A990D24439",
 "levels": [
  {
   "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3B3DAC5_EDFA_7276_41DE_D35A7CCD9E68",
 "levels": [
  {
   "url": "media/panorama_C1C7B780_CA9F_C6C6_41E4_A835D64F2A3B_1_HS_1_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3CC8AC0_EDFA_726D_41A1_0E940353C8F0",
 "levels": [
  {
   "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3CCAAC1_EDFA_726F_41AF_3C42492A76A5",
 "levels": [
  {
   "url": "media/panorama_C0E1A004_CA9E_59CF_41E3_9E932067888A_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3CDBAC2_EDFA_726D_41EB_FD35A5391D14",
 "levels": [
  {
   "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3CDFAC2_EDFA_726D_41E2_3A3AAB31447C",
 "levels": [
  {
   "url": "media/panorama_C0E65847_CA9E_CA4A_41E2_57E6E861A4A6_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3CC4AC1_EDFA_726F_41ED_8B5B9402588F",
 "levels": [
  {
   "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3CC6AC2_EDFA_726D_41CC_00163DA47C52",
 "levels": [
  {
   "url": "media/panorama_C0E19963_CA9E_CA4A_41E4_83ED2AC7755D_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3CFCABF_EDFA_7213_41C5_D9FED810FAFD",
 "levels": [
  {
   "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3CFEAC0_EDFA_726D_41B1_E5B52DE551A3",
 "levels": [
  {
   "url": "media/panorama_C0E123A3_CA9D_BECA_41D3_DE69F1BD05C2_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3CCEAC1_EDFA_726F_41E7_F17FAAD8865E",
 "levels": [
  {
   "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3CC0AC1_EDFA_726F_41E5_34ED7D889576",
 "levels": [
  {
   "url": "media/panorama_C0E12E48_CA9E_C647_41E6_86ACE50A224D_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3CD0AC2_EDFA_7272_41E3_7159A2E7264A",
 "levels": [
  {
   "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3CD5AC2_EDFA_7272_41D1_827D2404D271",
 "levels": [
  {
   "url": "media/panorama_C0E6D757_CA9E_C649_41E0_D8AA56E59BBA_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3CEAABF_EDFA_7213_41CD_6390DBAEB741",
 "levels": [
  {
   "url": "media/panorama_C01E5524_CA9D_DBCE_4186_A68D0E596463_1_HS_1_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3CD6AC2_EDFA_7272_41C4_CFE93D855757",
 "levels": [
  {
   "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3B2BAC3_EDFA_7272_41D2_078BEAD30838",
 "levels": [
  {
   "url": "media/panorama_C0E3C67A_CA9E_463A_41DD_D04707EFF788_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3CF2AC0_EDFA_726D_41E4_40BC4CFEB92A",
 "levels": [
  {
   "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3CF4AC0_EDFA_726D_41D3_8E69F7A06089",
 "levels": [
  {
   "url": "media/panorama_C0E1725E_CA9E_5E7B_41E3_0657481B0CCC_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3B2FAC3_EDFA_7272_41CE_3D645B3C95BC",
 "levels": [
  {
   "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3B21AC3_EDFA_7272_41B2_5E0D3791E3ED",
 "levels": [
  {
   "url": "media/panorama_C0E3053B_CA9E_7A39_41B1_1717E2626139_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3B25AC4_EDFA_7276_41ED_A3D3E2E7CAB4",
 "levels": [
  {
   "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_1_HS_0_0.png",
   "width": 380,
   "class": "ImageResourceLevel",
   "height": 480
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_E3B27AC4_EDFA_7276_41E0_05CB71DAAC49",
 "levels": [
  {
   "url": "media/panorama_C0EF53B9_CA9E_5E39_41CE_2FBFCE5D165C_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "scrollBarWidth": 10,
 "data": {
  "name": "ThumbnailList1355"
 },
 "itemThumbnailShadowColor": "#000000",
 "id": "ThumbnailList_D68BACD6_C48D_F5E7_41BE_BAE86D7ADCFE",
 "scrollBarColor": "#FFFFFF",
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "itemLabelFontStyle": "normal",
 "width": "100%",
 "borderSize": 0,
 "itemPaddingRight": 3,
 "selectedItemLabelFontWeight": "bold",
 "minHeight": 1,
 "horizontalAlign": "center",
 "itemLabelFontWeight": "normal",
 "itemLabelFontFamily": "Arial",
 "verticalAlign": "top",
 "itemThumbnailShadowOpacity": 0.8,
 "itemOpacity": 1,
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "playList": "this.ThumbnailList_D68BACD6_C48D_F5E7_41BE_BAE86D7ADCFE_playlist",
 "itemVerticalAlign": "middle",
 "itemLabelFontSize": 14,
 "itemLabelTextDecoration": "none",
 "minWidth": 1,
 "itemThumbnailShadowBlurRadius": 4,
 "itemBorderRadius": 0,
 "height": "72.917%",
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "class": "ThumbnailList",
 "itemThumbnailScaleMode": "fit_outside",
 "backgroundOpacity": 0,
 "itemThumbnailShadowVerticalLength": 3,
 "paddingLeft": 20,
 "itemLabelFontColor": "#FFFFFF",
 "gap": 1,
 "itemThumbnailHeight": 100,
 "itemBackgroundOpacity": 0,
 "itemThumbnailShadowSpread": 1,
 "itemMode": "normal",
 "paddingTop": 10,
 "click": "this.setComponentVisibility(this.ThumbnailList_D68BACD6_C48D_F5E7_41BE_BAE86D7ADCFE, false, 0, null, null, false)",
 "itemThumbnailBorderRadius": 10,
 "paddingBottom": 1,
 "shadow": false,
 "itemLabelGap": 0,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemHorizontalAlign": "center",
 "itemBackgroundColor": [],
 "itemPaddingBottom": 3,
 "propagateClick": false,
 "borderRadius": 5,
 "itemThumbnailWidth": 151,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemThumbnailOpacity": 1,
 "itemThumbnailShadow": true,
 "layout": "horizontal"
},
{
 "maxHeight": 250,
 "maxWidth": 250,
 "scaleMode": "fit_inside",
 "id": "Image_C4B0AB86_CB6A_CECA_41E3_B5F613A07E54",
 "left": "0%",
 "horizontalAlign": "center",
 "borderSize": 0,
 "width": "100%",
 "minHeight": 1,
 "url": "skin/Image_C4B0AB86_CB6A_CECA_41E3_B5F613A07E54.png",
 "top": "0%",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "paddingLeft": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "this.openLink('https://portfolio.robertosales.com.br/projetos-360/', '_blank')",
 "paddingBottom": 0,
 "height": "100%",
 "shadow": false,
 "data": {
  "name": "Image7329"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "maxHeight": 608,
 "maxWidth": 605,
 "id": "IconButton_CB43F41B_C484_546D_41E7_25753E48123C",
 "horizontalAlign": "left",
 "borderSize": 0,
 "width": "44.037%",
 "minHeight": 30,
 "iconURL": "skin/IconButton_CB43F41B_C484_546D_41E7_25753E48123C.png",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 30,
 "mode": "push",
 "paddingLeft": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "this.openLink('https://www.instagram.com/galeriaatlantis/', '_blank')",
 "paddingBottom": 0,
 "height": "16.954%",
 "shadow": false,
 "data": {
  "name": "INSTAGRAM"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "maxHeight": 594,
 "maxWidth": 591,
 "id": "IconButton_CB49F62E_C48B_B4A7_41D8_7652E8A2DBAC",
 "horizontalAlign": "left",
 "borderSize": 0,
 "width": "41.743%",
 "minHeight": 30,
 "iconURL": "skin/IconButton_CB49F62E_C48B_B4A7_41D8_7652E8A2DBAC.png",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 30,
 "mode": "push",
 "paddingLeft": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "this.openLink('https://bit.ly/mentoriagmn', '_blank')",
 "paddingBottom": 0,
 "height": "20.115%",
 "shadow": false,
 "data": {
  "name": "WHATSAPP"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "maxHeight": 590,
 "maxWidth": 588,
 "id": "IconButton_D4C5BC86_C484_D467_41D7_FA32751F1CC5",
 "horizontalAlign": "left",
 "borderSize": 0,
 "width": "40.367%",
 "minHeight": 30,
 "iconURL": "skin/IconButton_D4C5BC86_C484_D467_41D7_FA32751F1CC5.png",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 30,
 "mode": "push",
 "paddingLeft": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "this.openLink('https://goo.gl/maps/DCCJ8RoQXAPapL3s6', '_blank')",
 "paddingBottom": 0,
 "height": "22.701%",
 "shadow": false,
 "data": {
  "name": "MAPS"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "transparencyActive": false,
 "maxHeight": 505,
 "maxWidth": 523,
 "id": "IconButton_CB4C696C_C48B_DCAB_41E1_A783E0EC40DB",
 "horizontalAlign": "left",
 "borderSize": 0,
 "width": "48.624%",
 "minHeight": 30,
 "iconURL": "skin/IconButton_CB4C696C_C48B_DCAB_41E1_A783E0EC40DB.png",
 "paddingRight": 0,
 "verticalAlign": "middle",
 "minWidth": 30,
 "mode": "push",
 "paddingLeft": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "paddingTop": 0,
 "click": "this.openLink('https://portfolio.robertosales.com.br/projetos-360/', '_blank')",
 "paddingBottom": 0,
 "height": "21.839%",
 "shadow": false,
 "data": {
  "name": "SITE"
 },
 "propagateClick": false,
 "borderRadius": 0,
 "cursor": "hand"
}],
 "scrollBarWidth": 10,
 "children": [
  "this.MainViewer",
  "this.Container_CB661D43_C484_D4DD_41E1_248C85BB2D4F",
  "this.Container_CA6EA08A_C48C_EC6F_41E7_A602ACC8FEDB",
  "this.Container_CBFFFAFF_C4BC_BDA5_41E4_FF9621011F5B"
 ],
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "start": "this.playAudioList([this.audio_E1EF8C64_EE16_5636_41CB_FBFB906E71DB, this.audio_D7ACC278_CDEB_BE47_41E2_C43CA4EAD972]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_D465668E_C485_B467_4129_919D8298F0D8], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_D68BACD6_C48D_F5E7_41BE_BAE86D7ADCFE_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_D4F92038_C49B_ACAB_41E6_96B27D79D9E9].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "horizontalAlign": "left",
 "buttonToggleFullscreen": "this.IconButton_D4F92038_C49B_ACAB_41E6_96B27D79D9E9",
 "scripts": {
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getKey": function(key){  return window[key]; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "existsKey": function(key){  return key in window; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "registerKey": function(key, value){  window[key] = value; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); }
 },
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "verticalAlign": "top",
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "defaultVRPointer": "laser",
 "downloadEnabled": false,
 "paddingLeft": 0,
 "class": "Player",
 "width": "100%",
 "paddingTop": 0,
 "contentOpaque": false,
 "paddingBottom": 0,
 "gap": 10,
 "shadow": false,
 "data": {
  "name": "Player1834"
 },
 "mouseWheelEnabled": true,
 "height": "100%",
 "propagateClick": false,
 "borderRadius": 0,
 "desktopMipmappingEnabled": false,
 "overflow": "visible",
 "buttonToggleMute": "this.IconButton_CB0917B8_C485_D3AB_41DF_2ADB73C6100A",
 "layout": "absolute"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
