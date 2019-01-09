# Title: DJ On-The-Go

DJ On-The-Go is a program that allows the user to play music where
the songs on the playlist will fade in and out to smooth the 
listening experience similar to a DJ mixing music.


# Demo
* Local Host

GitHub
* https://github.com/csummers77/DjOnTheGo


# Table of Contents

* Description
* Technologies
* Challenges and Solutions
* MVP
* Our Stretch Goals
* Authors


# Description

## Program Features
The DJ On-The-Go program currently supports playing multiple mp3 music files from a manually created playlist by fading out the song currently playing and fading in the new song to be played.

## Play Button
Click the Play button to start the program and the first song will start to play.  The Play button may also be clicked after the Stop button has been clicked to continue the song where it was stopped.  You'll notice the record image will begin to spin while the songs are playing.

## Stop Button
Click the Stop button to stop the program and the song now playing will stop.  You'll notice the record image will stop spinning when the song has stopped playing.

## Updating the Playlist
All songs to be played, the play list, must be hosted and accessed locally via the .js file as an mp3 file and added to the array of songs.  Additionally a new variable must be set up for any songs added to the play list.


# Technologies

* HTML - page layout and design
* JavaScript - program functions
* CSS - page layout and design
* Bootstrap - page layout and design
* Fontawesome - page layout and design

# Challenges & Solutions
* Obtaining Music to be played:\
Our requiremnt was to obtain the songs/music to be played by beats per minute (BPM). The was a lot of research effort put forth to identify a "FREE" api that would provide downloadable songs with detailed song/artist information specifically the BPM. All of the api's reviewed provided some type of song/artist information, but not the song mp3 itself.  We do have an api where in future versions we'll pull and display the song information so the user can identify songs with the same BPM. \
From there, it was a challenge to "legally" obtain the music. US and international Copyright laws disallow the reproducing of music and movies without permission but you can reproduce/copy songs to a local drive is permitted and in some cases happens automatically by virtue of playing a song from a website; however, you cannot publish a website with music without authorization.\
Solution: Songs to be played on the local drive, were obtained from YouTube music videos and converted to an mp3 file.


# MVP
* Initial Layout \
To play songs repetively with the fade in and out feature
The page displays functioning Play/Pause buttons\
The page displays a spinning turntable image while the song is playing\
The page displays a non-spinning turntable image when a song is paused or stopped


# Stretch Goals
* API to obtain artist and song information where the user may view song details.
* Update design


# Authors
* Cody Summers
* Gbenga Akhuemonkhan
* Ron Fletcher
* T/A Support - Kyle Booth





