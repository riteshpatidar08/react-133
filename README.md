PROJECT: Unsplash Image Explorer

1. PURPOSE
Users can search and explore photos.

2. PAGES
- Home
- Photo Details

3. HOME COMPONENTS
- Navbar
- SearchBar
- CategoryList
- CategoryButton
- ImageGrid
- ImageCard
- Loader
- ErrorMessage

4. PHOTO DETAILS COMPONENTS
- LargeImage
- AuthorInfo
- PhotoInfo

5. STATE
- search
- images
- loading
- error
- selectedImage

6. API
- Search Photos
- Get Photo Details

7. DATA FLOW

SearchBar
   ↓
Search keyword
   ↓
API
   ↓
Images
   ↓
ImageGrid
   ↓
ImageCard

8. CATEGORY FLOW

CategoryButton
   ↓
Category name
   ↓
API
   ↓
Images
   ↓
ImageGrid