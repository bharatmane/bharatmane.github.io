// How to add photos:
// 1. Open Google Photos and find the photo you want to feature
// 2. Right-click the image → "Copy image address"
//    The URL will look like: https://lh3.googleusercontent.com/...
// 3. Paste it below with an optional caption
// 4. Push to git → Jenkins deploys automatically

export interface Photo {
  url: string
  caption?: string
}

export const PHOTOS: Photo[] = [
  // Add your Google Photos URLs here, e.g.:
  // { url: 'https://lh3.googleusercontent.com/...', caption: 'Bengaluru monsoon, 2023' },
]
