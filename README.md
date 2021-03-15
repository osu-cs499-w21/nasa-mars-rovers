# Mars Rover Photos Project

The project introduces the user to the three of NASA's rovers and shows the photos taken by them. The search allows the user to filter the photo results by the Earth's date and camera type. 

## API Key

The API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars and make it more easily available to other developers, educators, and citizen scientists.

## Rover photos

Each rover has its own set of photos stored in the database, which can be queried separately. There are several possible queries that can be made against the API. Photos are organized by the Earth date on which they were taken.

Along with querying by date, results can also be filtered by the camera with which it was taken. Each camera has a unique function and perspective, and they are named as follows:

### Rover Cameras

    Abbreviation | Camera                         | Curiosity | Opportunity | Spirit
     ------------ | ------------------------------ | --------  | ----------- | ------ |
    FHAZ|Front Hazard Avoidance Camera|✔|✔|✔|
    RHAZ|Rear Hazard Avoidance Camera|✔|✔|✔|
    MAST|Mast Camera| ✔||
    CHEMCAM|Chemistry and Camera Complex  |✔||
    MAHLI|Mars Hand Lens Imager|✔||
    MARDI|Mars Descent Imager|✔||
    NAVCAM|Navigation Camera|✔|✔|✔|
    PANCAM|Panoramic Camera| |✔|✔|
    MINITES|Miniature Thermal Emission Spectrometer (Mini-TES)| |✔|✔|

#### Querying by Earth date:

    Dates should be formatted as 'yyyy-mm-dd'. The earliest date available is the date of landing for each rover.

    https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&earth_date=2015-6-3

#### Filtering Queries by Camera:

    The camera parameter is not case sensitive, but must be one of the camera abbreviations listed in the table above for the respective rover.

    https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=1000&camera=fhaz

    https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?api_key=DEMO_KEY&earth_date=2015-6-3&camera=pancam
