# spotify-hub

## Mission
Chrome extension for new tab pages that shows users spotify information and other productivity gadgets. 
Users can see their basic spotify analytical information as well as time, date, and a todo list. 
Bonus: playlist recommender based on user listening data and todo list keywords also being implemented.

## Setup
Give me your github email and Ill add you as a collaborator. Then youll get an email confirmation and click accept. then you can just copy the https clone link and git clone that in a safe local folder.

### Bash Scripts
This is just fast command line commands that we want to automate. First chmod +x [bin/test_script] or whatever file, and then try running in cmd line with ./bin/test_script. if you get a weird $/r error, do [sudo apt-get install dos2unix] and then [dos2unix bin/test_script]. ONLY FOR WINDOWS. THen you should be able to run them.

## Login Screen
When user first downloads the extension, we want the user to see a beautiful new tab layout, but also give the user the option to input their spotify account to get started. ANY issue or "hacky" web path will redirect to this html.

Contains:
* Time and Date
* Short description of hub
* Login bar
* Bonus: add a playable list of top songs based on network location

## Login attempt Informational Screen?
Add if we need legal documents shown to the user. If not go directly to the main page.

## Main page
Everytime a user opens a new tab, they will see this page (after they logged in with spotify).

### Layout:
* [Spotify Account name and image](#spotify-account-name-and-image)
* [Time and Date](#time-and-date)
* [Total Listen Hours](#total-listen-hours)
* [Show Users Top Artists and Tracks](#show-users-top-artists-and-tracks)
* [Recommendation Playlist](#recommendation-playlist)
* [Settings Bar](#settings)

### Spotify Account Name and Image
[Spotify API Guide](https://developer.spotify.com/documentation/web-api/reference/users-profile/get-users-profile/)

Get Username and Image from this API. IF no image, use a default image.

### Time and Date
Dynamic clientside time and date. Time always updating. ex 8:38

ADD: Hover over time to show timezone

### Total Listen Hours
Not sure if this possible atm. If it is add it.

### Show Users Top Artists and Tracks
Shows users top ten artist and tracks of the last 6 months.

[Spotify Api Guide](https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/)

We are going to want to add default values for limit (10), offset (0), and time_range (medium_term) which is last 6 months.

### Recommendation Playlist
Based on user information such as [saved tracks](https://developer.spotify.com/documentation/web-api/reference/library/get-users-saved-albums/), [saved albums](https://developer.spotify.com/documentation/web-api/reference/library/get-users-saved-albums/), [users followed artists](https://developer.spotify.com/documentation/web-api/reference/follow/get-followed/), users tops songs, and KEYWORDS.

Gather all this information, and then compile a playlist and ask the user if they want to save it to their playlists.

### Settings
* Set timezone
* maybe darkmode lightmode?
* logout button

## Chrome Extension Uploading
[Youtube Tutorial on New Tab Override](https://www.youtube.com/watch?v=vNb3P5KIxXw)

[Overriding Chrome Page documentation](https://developer.chrome.com/extensions/override)
