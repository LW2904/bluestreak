## All things bluestreak reside here.

### Using the scripts in this repository:

1.  Download [NodeJS](https://nodejs.org/en/) LTS
2.  Download this repository.
    - Developers way: Get [git](https://git-scm.com/) and do `cd c:/your/working/dir` and `git clone https://github.com/LW2904/bluestreak.git`
    - Boring way: Download [here](https://github.com/LW2904/bluestreak/archive/master.zip), and unzip.
3.  Move into your working directory by doing `cd x:/your/working/dir/bluestreak`, or just `cd bluestreak` if you already `cd`d earlier.
4.  `npm i` to install all dependencies, you only need to do this once.
5.  `node index` to run the script which will let choose the function to run.

### Contents

#### `valid`

Prints all members who either have an invalid tag, or none at all.

#### `activity`

Prints all members that are considered to be inactive as defined in the rules.
_Note that this is backed by an API that is currently semi-broken (thanks, steam). As I will most likely not be actively working on this in the near future, if you wish to contribute to fixing this issue, please do feel free to do so [here](https://github.com/LW2904/server/blob/master/api/steam/comments/index.js)._

#### `statistics`

Prints general statistics based on the last 5000 comments made.
_The same note as above applies._
