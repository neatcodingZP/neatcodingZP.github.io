'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f96dffdd9051518c34ca6a042665ac05",
"version.json": "9094aacdae789dccd67fa32109ff1a18",
"index.html": "cd2722be396e0e242ebdbc3f96316476",
"/": "cd2722be396e0e242ebdbc3f96316476",
"main.dart.js": "175295ba84a286890b3fcd81f08c374f",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5e8d9f2d4d692349bb2ab631d27dd16f",
"icons/Icon-192.png": "603780762f15bae59523fadab5f1fb8e",
"icons/Icon-maskable-192.png": "603780762f15bae59523fadab5f1fb8e",
"icons/Icon-maskable-512.png": "940344cbbe5957fd85a21d82dbef3951",
"icons/Icon-512.png": "940344cbbe5957fd85a21d82dbef3951",
"manifest.json": "8c52d02840bc5c10bc050ea95d7b8313",
"main.dart.js_1.part.js": "90080e78f97a7ee8c89141f1accf897c",
".git/config": "f05b1d8dca99f476b5f137082339205a",
".git/objects/0d/9b491b071e734d6f1b6e8f2806c7b055645959": "9ff992df45cf072fcf4e00d974b9363c",
".git/objects/3e/401538242ae267c0260e88eef20417de6e66eb": "652ba955ba40e907ea2df978e8c30dee",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/6f/811be09c7fe4aede574bb33c4971f0847e1619": "83713418d18ea5c2ed57628c75863be3",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/51/f0321dcc174c2f00328975dbe5e486901050c8": "bfcccfd70bbf9dce120c8c69657fbce5",
".git/objects/58/1b3b5b5fcd9ba05aaff355342658b6e2b4d910": "804cb22ba989f3524369ceafb187ee54",
".git/objects/60/b288ed25774af56def7521154f333201115957": "c3a69ca380b020060d34e8dbecdf5c52",
".git/objects/60/fc8098722a7b38c0eeb0f85b3304e592aca7f5": "5a9661132a22e2d8d8c7e75b5e1c0700",
".git/objects/34/c2bb62a4bd439d85cd34b538d36293fae295e3": "9a727ff217077f9905c7bec4e83cb910",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/9d/97e15502ce3f6cea006d304e5a94332335e264": "e163175b61ec90065694d80ebaa817ed",
".git/objects/b5/046e5b99b70b52fdb0e631a15aa43935ed7769": "3f406cc1dbb4a444e86b736e4f6b1161",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/9fd3da75eed2b7beaedc7c4468b0d2142818a1": "cbc4ae3e2b409ebb89e848128950897a",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/fa200f934dfbed3c83ec3ebcb8f055460aaf53": "5096393534c88116e927e5b959c46c5f",
".git/objects/ca/a760a5a6a47d29b2e7bbb80d311e8b76f98cfa": "cad5a068a758037a72e4605ceea9307b",
".git/objects/fe/92bd73c5df99eaa71fc889b494e75d2b710c1f": "a7e85e1e8b4ca932101fd3e110d703da",
".git/objects/ed/1287c69adaa297636dd88985c287bbc529eb65": "6f76b30186636d8d0594be9c3b2e6521",
".git/objects/80/b2d544fd0f207b3a27e2129f0b9ee8f7aa1c54": "5963a34763c257fd9bf6b7a662ebbb4e",
".git/objects/80/1adecb93f0e65bb4163e96f0496449d48d74f3": "0d38be2293fc1c4205ea5dbaa224bdda",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/72/6d85b140b3dcaa0aaac80c00f97eadb362792b": "b9659aab78b0b3cdf3fb8035df49901d",
".git/objects/2a/cdabd0be3a3b41f1fd8ed8a2d75f9a9cca8e60": "dcd013fdc0b818ecc4d8158c6be96932",
".git/objects/43/2a96db533b9430197d822d9b50cd0a349480c0": "036f3f8ded1a4529185d2ac5998454d7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/af1afd0023e735d981c23b222342a215afc5cc": "5571ed36942a350b602708a8771c35ad",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/31/d095934c852bc775c09859df349817d4731569": "468c9615fe9eeb1eff006f0e770680eb",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3f/7be9968dcb85103bc4fc4c265497ebcdb4cab6": "1ad7e7901e699a0ad8b6d1afb01ff2de",
".git/objects/99/70e6ee86548a7b673253cd8fa7be7e9913fb0f": "6b40060b5bdb2ad4b8ffcc692df89b84",
".git/objects/55/3373b459f9d416f5df75b07292727ce9400648": "f0d5a25aa924fb69c8f096fcb876bb08",
".git/objects/64/8a10361a07c42af82e5d7d6e352f61c9849d9a": "bb394e3f2bd8623919d1309ae0700d4c",
".git/objects/90/3aca46ff21d53cdfebf85fac5f531994ad9b04": "d3124e71510c88c90ab362bdd783a6d7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/9f061b03a7c1ebd491995d16d7b5afa9ac7a58": "87ed3f11e6919198e45b1940f2634e04",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "fa7c265b9b6c9eb30852d96f5a7b3962",
".git/objects/aa/9feb88ebab47bda38e6a48db9591f993fdf31c": "74fff9b4aeafb3637f0c4762ef6d4324",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/c15e581a392b1aa6d244829bf2af116b32b4b4": "c7fab6cd0ff68b4ded12b9980c61bcd3",
".git/objects/e8/3157ee2037afa4542bed6697bd7d1490a103b9": "8fc808eb8225896ae7e381f8f7643d7f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/93464eabc10ef226598fdbc7e7fbdb6b2958bd": "92ce5cb6f287d7402a4a5a9f0b15d9ec",
".git/objects/e7/243a9a9b05f38106cc726d5f80966b3fde460c": "0aef698cd149b28033178143518ab3ea",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/5faebc3de22b968b204fb246f8024e20715c51": "69961082ea9c87fc1b9d170d2ab90eb6",
".git/objects/1e/37be1b7bc5db10dc2fc219e0464bd7fc371df7": "479429c498053de5461d1d3523b16295",
".git/objects/4a/526f43f0fe903e9cd42908dfd568835a833353": "10abdea3c13f4132d26c45551a6d9163",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/71/1fc1e7b0a3c7740ac764ddd1a19614625aba1b": "0c8e11934d0124bbbd6898ab6dbf4b69",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/14/7410b582f7f0855be4eed09283f118cecdd72c": "3962a7a81f19175d1c4a9078d74a85b2",
".git/objects/25/d7b9156ec87cdee7afefbe369fea227b9cb5e6": "2dddf38cc1e7173f38c06206255f66d1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a480091e398070266c0819c229b41a7e",
".git/logs/refs/heads/main": "f285f073576943db3721faafaefe9fb8",
".git/logs/refs/remotes/origin/main": "13576447062c24ef24c3c1bb0fc93055",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "33678b8765690a95f416f17ecec9879a",
".git/refs/remotes/origin/main": "33678b8765690a95f416f17ecec9879a",
".git/index": "22b7fce49dc66651e00b28d4ea94868d",
".git/COMMIT_EDITMSG": "75de5d8d269cf2eaccd609172ef36f38",
"assets/images/flags/flag_uk.png": "c8c5980648ebd1ec617ebc6525effaa9",
"assets/images/flags/flag_en.png": "c8b054860476b2ad6c4333166319572f",
"assets/images/pointright.png": "021abf37f739edb7c3cf677a7ff43079",
"assets/images/wave.png": "5b0b23abaa2e3f863a6c8a15b88aa43c",
"assets/images/logo.png": "958ef9a7d2419ce3124cafc2a2bbf0eb",
"assets/AssetManifest.json": "458b0e35d730d0789b997ef30e0020c5",
"assets/NOTICES": "d916b7d001716e7314041824ac65c0b7",
"assets/rocket.png": "8811b8983c25b455fd911cc367847709",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "880dae276dfe521db0973cd1b6410bf8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "05e6e1aaab00ec96f3ef96dc822464de",
"assets/fonts/MaterialIcons-Regular.otf": "caf95a3f82cc2d1e2543055a513d4261",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
