        //nested html structure


        const parent = React.createElement("div",{id: "parent"},
        React.createElement("div",{id: "child1"},
        React.createElement("div",{id: "child2"},
        [React.createElement("h1",{id: "sibling1"},"Sibling 1 says Hi"), React.createElement("h1",{id: "Sibling2"},"Sibling 2 says Hi")])));
        // to create siblings we use [] array 
        // creating stuctures like this is tiresome and ugly that's why we use JSX 


        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent); 