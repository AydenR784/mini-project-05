        const destinations = [
            {
                id: "tortuga",
                title: "Tortuga",
                category: "Port",
                image: "https://i.pinimg.com/736x/99/82/f8/9982f81a630d2296f5d03f332a2b03d1.jpg",
                description: "A lively pirate port full of ships, taverns, and travelers.",
                details: "Walk around the harbor, visit a tavern, and see the pirate ships. Jack Sparrow has visited this port."
            },
            {
                id: "port-royal",
                title: "Port Royal",
                category: "Port",
                image: "https://static.wikia.nocookie.net/pirates/images/c/cf/Port_Royal_whole.jpg/revision/latest?cb=20111223025522",
                description: "A busy English port with forts, ships, and a long harbor.",
                details: "See the old fort, walk along the docks, and watch ships arrive. It is the home of Weatherby Swann."
            },
            {
                id: "isla-de-muerta",
                title: "Isla de Muerta",
                category: "Island",
                image: "https://static.wikia.nocookie.net/pirates/images/d/d6/Isla_de_Muerta.JPG/revision/latest?cb=20110725141957",
                description: "A hidden island surrounded by dangerous waters and secrets.",
                details: "Explore the caves and look for treasure, but visit carefully. The island has many cavernous tunnels."
            },
            {
                id: "shipwreck-cove",
                title: "Shipwreck Cove",
                category: "Island",
                image: "https://static.wikia.nocookie.net/pirates/images/e/e5/ShipwreckCityConceptArt.jpg/revision/latest?cb=20110326223539",
                description: "A sheltered cove filled with pirate ships and old wrecks.",
                details: "Explore the cove and hear pirate stories. It is a meeting place for the Pirate Lords."
            },
            {
                id: "nassau",
                title: "Nassau",
                category: "Port",
                image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
                description: "A sunny harbor with clear water and plenty of boats.",
                details: "Take a walk by the water, watch the ships, and enjoy the busy harbor."
            },
            {
                id: "hidden-island",
                title: "Hidden Island",
                category: "Island",
                image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=80",
                description: "A quiet tropical island far from the busiest ports.",
                details: "Relax on the beach, explore the shoreline, and keep an eye out for hidden pirate treasure."
            }
        ];

        const destinationGrid = document.getElementById("destination-grid");
        const filterButtons = document.querySelectorAll(".filter-button");
        let currentCategory = "All";

        function showDestinations() {
            const filteredDestinations = destinations.filter(function(destination) {
                return currentCategory === "All" || destination.category === currentCategory;
            });

            destinationGrid.innerHTML = filteredDestinations.map(function(destination) {
                return `
                    <article class="destination-card">
                        <div class="card-image">
                            <img src="${destination.image}" alt="${destination.title}">
                            <h3>${destination.title}</h3>
                        </div>
                        <div class="card-info">
                            <p><strong>Category:</strong> ${destination.category}</p>
                            <p>${destination.description}</p>
                            <button class="details-button" type="button" data-details="${destination.id}-details" aria-expanded="false" aria-controls="${destination.id}-details">
                                View Details
                            </button>
                            <div class="card-details" id="${destination.id}-details" hidden>
                                <p>${destination.details}</p>
                            </div>
                        </div>
                    </article>
                `;
            }).join("");
        }

        filterButtons.forEach(function(button) {
            button.addEventListener("click", function() {
                currentCategory = button.dataset.category;

                filterButtons.forEach(function(filterButton) {
                    filterButton.classList.remove("active");
                    filterButton.setAttribute("aria-pressed", "false");
                });

                button.classList.add("active");
                button.setAttribute("aria-pressed", "true");
                showDestinations();
            });
        });

        destinationGrid.addEventListener("click", function(event) {
            const button = event.target.closest(".details-button");

            if (button) {
                const details = document.getElementById(button.dataset.details);
                details.hidden = !details.hidden;
                button.setAttribute("aria-expanded", !details.hidden);
                button.textContent = details.hidden ? "View Details" : "Hide Details";
            }
        });

        showDestinations();
