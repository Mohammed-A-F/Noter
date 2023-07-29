window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
          var navbar = document.getElementById("navbar");
          if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
              navbar.style.boxShadow = "0 0 10px #888888";
          } else {
              navbar.style.boxShadow = "";
          }
      }
      function generateHtml() {
        const xyz = {
          "mainTitle": "A Guide to Buying Monitors",
          "subTitles": {
            "Factors to Consider When Choosing a Monitor": {
              "1": "Purpose of use and budget considerations",
              "2": "Size and aspect ratios",
              "3": "Resolution options and recommended sizes",
              "4": "Refresh rate and its impact on gaming and other tasks",
              "5": "Input lag and response time",
              "6": "Variable refresh rates",
              "7": "Panel types and their differences",
              "8": "Connectivity options",
              "9": "HDR support and its importance",
              "10": "Warranty and customer support"
            },
            "Recommendations for Different User Types": {
              "1": "Productivity and office use: 24-inch 1080p or 27-inch 1440p monitors",
              "2": "Smart monitors with additional features for entertainment",
              "3": "Monitors for creative professionals: 4K 32-inch monitors with accurate colors",
              "4": "Gaming monitors: considerations for refresh rate, resolution, and panel type"
            }
          }
        };
        //create the line
        const cont = document.createElement("notes-ai");
        const line = document.createElement("div");
        line.classList.add("line");

        const title = document.createElement("div");
        title.classList.add("h2-main-title");
        title.innerHTML = xyz.mainTitle;


        const parentElement = document.querySelector("#notes-ai");
        cont.appendChild(line);
        cont.appendChild(title);
        parentElement.appendChild(cont);



        const arr = [];

        arr.push(xyz);
        createContNMainTitle(xyz);

        //const jsonfile = JSON.parse(xyz);


          
      }

      function createContNMainTitle(data){

            for (var subTitle in data.subTitles) {
          
              // Create the container element and add the appropriate class
              const container = document.createElement("div");
              container.classList.add("note-cont");
          
              // Create the header element and add the appropriate classes and content
              const header = document.createElement("div");
              header.classList.add("note-header");
              const headerContent = `
              <div style="display: flex; align-items: center;">
                <h4 style="margin-right: 5px;">Flash Card?</h4>
                <label class="switch">
                  <input type="checkbox" value="checked" name="flash">
                  <span class="slider round"></span>
                </label>
              </div>
              <h3 id="h3-sub-title">`+subTitle+`</h3>
              <button class="sound-img"><img src="images/icons8-speaker-64 (1) 1.png" alt=""></button>
              `;
              header.innerHTML = headerContent;
          
              // Create the content element and add the appropriate class
              const content = document.createElement("div");
              content.classList.add("note");
          
              // Loop through the notes for the current subtitle and create a paragraph element for each note
              for (var index in data.subTitles[subTitle]) {
                const note = document.createElement("p");
                note.textContent = index + ": " + data.subTitles[subTitle][index]+".";
                content.appendChild(note);
              }
          
              // Append the header and content elements to the container element
              container.appendChild(header);
              container.appendChild(content);
          
              // Append the container element to the parent element in the HTML document
              const parentElement = document.querySelector("#notes-ai");
              parentElement.appendChild(container);
            }
          }
      