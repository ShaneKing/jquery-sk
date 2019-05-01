### SK

#### API
| Method | Example | Remark |
| -- | -- | -- |
| `static $($ = SK.DEFAULT_DOMAIN, initVal = {}, env = SK.DEFAULT_ENV)` | | New or get namespace object. eg. `var $sk = SK.$('$sk', {}, window)` |
| `static appendParameter(url, param, value)` | `('/a','b','c')` -> `'/a?b=c'` | |
| `static arePlainObject(...values)` | | |
| `static assign(object, ...objects)` | | Like lodash assign, but deep while object node. |
| `static cookies(key, value)` | | set/get cookie, delete key when value is null or undefined |
| `static descartes(array = [], anotherArray = [], concat = SK.CHAR_DASH)` | `(['alert','btn'],['success','info'])` -> `['alert-success','alert-info','btn-success','btn-info']` | |
| `static emptyFunc()` | | |
| `static extend()` | | |
| `static getCurrentHref()` | | |
| `static getCurrentLanguage()` | | |
| `static getCurrentOrigin()` | | |
| `static getCurrentPath()` | `/a/b -> /a/b`, `/a/b/c.html -> /a/b/c`, `/context/a -> /a` | |
| `static getCurrentSearch()` | | like `?a=1&b=2` |
| `static getRequestParameter(param, search)` | `(a,?a=1&b=2)` -> `1` | |
| `static getSubPaths(path)` | `/a/b` -> `['/','/a/','/a/b/']` | |
| `static getValidPath(path)` | `a/b/c` -> `/a/b/c/` | |
| `static local(key, value)` | | set/get localStorage, delete key when value is null or undefined |
| `static redirect(url)` | | |
| `static s4a(value, defaultValue = [])` | | Safe array for value |
| `static s4b(value, defaultValue = false)` | | Safe boolean for value |
| `static s4d(value, defaultValue = new Date())` | | Safe date for value |
| `static s4n(value, defaultValue = 0)` | | Safe finite number for value |
| `static s4o(value, defaultValue = {})` | | Safe plain object for value |
| `static s4s(value, defaultValue = SK.CHAR_EMPTY)` | | Safe string for value |
| `static session(key, value)` | | set/get sessionStorage, delete key when value is null or undefined |
| `static strMapping(str = SK.uuid().toLowerCase().replace(/-/g, SK.CHAR_EMPTY), dstSet = SK.SET_ARY_L62, srcSet = SK.SET_ARY_HEX)` | | |
| `static upperWordsFirstChar(words)` | `'xi nAn shi you xUe yuan china people'` -> `'Xi NAn Shi You XUe Yuan China People'` | |
| `static uuid()` | `XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX` | |
| `static uuidShort(uuid = SK.uuid(), dstSet = SK.SET_ARY_L62)` | | max length 22 |