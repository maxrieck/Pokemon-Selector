Used a single HTML page with a basic form, input, and button. Styling was done with bootstrap 
and with a seperate CSS page. when the name or number (1 -150) of a pokemon is entered it 
brings up a card with that pokemon's name, id number, image (a large one), type, height, weight, 
and a smaller round image that shows what the pokemon looks like in the game. 

I used async funtion "fetchPokemon()" with try and catch to first call the api. Assuming the api works, 
the api data is stored in a variable "api" and then used by the "pokemonData" variable in a async arrow function. 
That function uses template literals to get most of the info needed from the api and stored in a variable.
Seperate code calling files from the api had to be used with certain files to prevent issues with 
using "${name}" and "${front_defualt}" multiple times. I created seperate variables for them. 
I used CSS to capitalize the name and type displayed on the card since the info from the api
was all lower case. 

For the input, I set it to only recognize the orignal 151 pokemon. The input says "1 - 150",
but number 151, Mew, can also be searched. Making it secret like on the orginal games. I also 
found that after a certain id number (after about 600 or 700) on the api the higher quality 
image files were not available. So I wanted to cut off which numbers to search anyways and figured 
cutting it off at 150 solved the issue. 

If the user searches past 151 or misspells the name it returns an error card explaing the search parameters 
and a picture of a confused psyduck. 

 
