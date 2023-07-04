import React from 'react';
import Simpson from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id: 1,
            name: "Homer Jay Simpson",
            gender: "Male",
            status: "Alive",
            countryOfBirth: "United States",
            age: 39,
            hairColor: "Bald",
            occupation: "Safety inspector",
            info: "Homer Jay Simpson is a man from Springfield. He is the husband of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be 313.05641230253 pounds in one episode or 240 pounds elsewhere), lazy, and often ignorant to the world around him. Although he has many flaws, he has shown to have great caring, love and even bravery to those he cares about and sometimes, even others he doesn't.",
            image: "https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png"
        },
        {
            id: 2,
            name: "Marge Simpson",
            gender: "Female",
            status: "Alive",
            countryOfBirth: "United States",
            age: 39,
            hairColor: "Blue",
            occupation: "Unemployed",
            info: "Marjorie Jacqueline \"Marge\" Simpson (née Bouvier), is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. She and her husband Homer have three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family's antics by trying to maintain order in the Simpson household. Aside from her duties at home, Marge has flirted briefly with a number of careers ranging from a police officer to an anti-violence activist.",
            image: "https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png"
        },
        {
            id: 3,
            name: "Bartholomew Jo Jo \"Bart\" Simpson",
            gender: "Male",
            status: "Alive",
            countryOfBirth: "United States",
            age: 10,
            hairColor: "Blonde",
            occupation: "Student at Springfield Elementary School",
            info: "Bartholomew JoJo \"Bart\" Simpson is the mischievous, rebellious, misunderstood, disruptive and \"potentially dangerous\" oldest child of the Simpson family in The Simpsons. He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie. He also has been nicknamed \"Cosmo\", after discovering a comet in \"Bart's Comet\". Bart has also been on the cover on numerous comics, such as \"Critical Hit\", \"Simpsons Treasure Trove #11\", and \"Winter Wingding\". Bart also has a 100-issue comic series entitled the Simpson Comics Presents Bart Simpson. Bart is loosely based on Matt Groening and his older brother, Mark Groening.",
            image: "https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png"
        },
        {
            id: 4,
            name: "Lisa Marie Simpson",
            gender: "Female",
            status: "Alive",
            countryOfBirth: "United States",
            age: 8,
            hairColor: "Blonde",
            occupation: "Student at Springfield Elementary School",
            info: "Lisa Marie Simpson is the elder daughter and middle child of the Simpson family and one of the two tritagonists (along with Marge,) of The Simpsons. She was named after a train called Lil' Lisa on her parents' 1st anniversary; in \"Homer and Lisa Exchange Cross Words\", she called herself Lisa Bouvier after estranging herself from her father after he bet against her in a crossword tournament.",
            image: "https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png"
        },
        {
            id: 5,
            name: "Maggie Simpson",
            gender: "Female",
            status: "Alive",
            countryOfBirth: "United States",
            age: 1,
            hairColor: "Blonde",
            occupation: "Baby",
            info: "Margaret Evelyn \"Maggie\" Simpson is the 1-year-old, and youngest, child of Marge and Homer, and the baby sister to Bart and Lisa and the tetartagonist of The Simpsons. She is often seen sucking on her pacifier, and, when she walks, she trips over her clothing and falls on her face. Because she rarely ever talks, Maggie is the least seen and heard in the Simpson family.",
            image: "https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png"
        },
        {
            id: 6,
            name: "Santa's Little Helper",
            gender: "Male",
            status: "Alive",
            countryOfBirth: "United States",
            age: 7,
            hairColor: "Light brown",
            occupation: "Family dog",
            info: "Santa's Little Helper (born May 12, age 7), also known as No. 8 (his number in the dog race in \"Simpsons Roasting on an Open Fire\"), Suds McDuff (the name he changed to after becoming Duff Beer's mascot in \"Old Yeller-Belly\"), and Santa's Stupid Name (Brian Griffin's nickname for him in \"The Simpsons Guy\"), is the Simpson family's dog. Santa's Little Helper has been with the Simpson's family the whole series instead of dying or simply not making multiple appearances like how other animals in their care have.",
            image: "https://static.wikia.nocookie.net/simpsons/images/2/2c/Santa%27s_Little_Helper.png"
        },
        {
            id: 7,
            name: "Snowball V",
            gender: "Female",
            status: "Alive",
            countryOfBirth: "United States",
            age: 2,
            hairColor: "Black",
            occupation: "Family cat",
            info: "Snowball V is the Simpsons's fifth cat who looks exactly the same as Snowball II, who was accidentally struck and killed by Dr. Hibbert with his Mercedes-Benz. The Crazy Cat Lady throws the cat at Lisa while she is mourning the deaths of the other cats that she kept (Snowball III and Coltrane (Snowball IV). She, Santa's Little Helper and She Biscuit are the three current pets of the Simpson family. She is actually known as Snowball II.",
            image: "https://static.wikia.nocookie.net/simpsons/images/d/db/Snowball_V.png"
        }
    ]
    return (
        <div>
            <h1>Simpson family</h1>
            <img src="https://static.wikia.nocookie.net/simpsons/images/6/63/The_Simpsons_Simpsons_FamilyPicture.png" alt="Simpson family" height="400px"/>
            {simpsons.map(simpson => <Simpson key = {simpson.id} simpson = {simpson}/>)}
        </div>
    );
};

export default Simpsons;