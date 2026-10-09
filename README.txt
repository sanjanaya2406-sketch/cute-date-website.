PINK DATE INVITATION WEBSITE — WINDOWS START GUIDE

FILES
- index.html: the website's pages and text
- style.css: colors, layout, buttons, animations and mobile design
- script.js: interactions, food choices, date plan, hearts and music control
- README.txt: these instructions

PART 1 — RUN IT
1. Download pink_date_invitation_custom.zip.
2. In Windows, open File Explorer (press Windows + E).
3. Open Downloads.
4. Right-click the ZIP file and select Extract All.
5. Click Extract.
6. Open the extracted pink_date_invitation_custom folder.
7. Double-click index.html. It opens in your browser.
8. Try YES, select vegetarian food options (including pani puri), choose a date/time, and click through the memory and letter screens.

PART 2 — ADD YOUR PHOTOS
1. Copy three photos you want to use into this same folder.
2. Rename them photo1.jpg, photo2.jpg and photo3.jpg.
3. In index.html, find the section that starts <div class="gallery">.
4. Replace each placeholder div, for example:
   <div class="photo-placeholder">🩷</div>
   with:
   <img class="real-photo" src="photo1.jpg" alt="A favourite memory">
   Repeat with photo2.jpg and photo3.jpg.
5. Add this CSS to the bottom of style.css:
   .real-photo {
     width: 100%;
     height: 112px;
     object-fit: cover;
     border-radius: 10px;
     display: block;
   }
6. Save index.html and style.css, then refresh the browser.
Use photos you have permission to share.

PART 3 — ADD BACKGROUND MUSIC
1. Choose an MP3 file you are allowed to use.
2. Copy it into the same folder as index.html.
3. Rename the file exactly: our-song.mp3
4. Refresh the website and click the round play button.
Browsers normally require the visitor to click before audio starts. If your file is not MP3, either convert it to MP3 or update the source type in index.html.

PART 4 — PERSONALIZE THE LOVE NOTE
1. Right-click index.html.
2. Choose Open with > Notepad (or open it in Visual Studio Code).
3. Search for: "My favourite plans are the ones that include you."
4. Replace the paragraph with your own message.
5. Save (Ctrl + S), then refresh your browser.

PART 5 — CHANGE THE MAIN QUESTION
Search index.html for:
Will you go on a date with me?
Change it to the wording you want, save and refresh.

IMPORTANT NOTES
- This is a front-end website. The date plan is displayed in the browser only; it is not emailed, uploaded, or saved to a server.
- No Python, Django, Node.js or database is needed.
- The Google Fonts import needs an internet connection; fallback fonts are included.
- The music file must be named our-song.mp3 and be in the same folder as index.html.
- You can upload the HTML, CSS, JS and any intended public photos to a static hosting service later. Avoid publishing private details or photos without permission.
