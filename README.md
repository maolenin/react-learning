### Steps to start a new computer and sync with the existing work
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

### Add external repo into an existing repo
git remote add external https://github.com/EXTERNAL_USER/EXTERNAL_REPO.git
git fetch external

git read-tree --prefix=external_code/ -u external/main
git commit -m "Imported external repo into external_code folder"
git push origin main
