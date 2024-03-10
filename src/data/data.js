const myPortfolioData = [
  {
    id: 1,
    project: {
      thumbnail: "QM thumbnail.png",
      logo: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/qmLogo.png?alt=media&token=74895ad3-8276-49d0-8626-3fb4bdc96a55",
      name: "quick meals",
      angleButton:
        "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/angle-left-solid.svg?alt=media&token=a00f59f6-5c7a-4aaf-938d-c7be4406f2aa",
      data: [
        {
          id: 0,
          projectTitle: "Quick Meals App Design",
          author: "SAAGAR TAKORE",
        },
        {
          id: 1,
          introImg:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/slid2.png?alt=media&token=3880d566-7cfb-4d54-8135-cf8b4486b62d",
          introInfo: [
            {
              id: 1,
              icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/theproduct.svg?alt=media&token=7f1b1040-6e02-4b2d-a892-899d184d4a1c",
              title: "The Product",
              paragrp:
                "The QuickMeals a food delivery app that will provide faster doorstep delivery service in Tier-I and Tier-II cities in India . Targets business persons like commuters and workers who lack the time or ability to prepare a dinner or go out for dine-in.",
            },
            {
              id: 2,
              icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/duration.svg?alt=media&token=e8f72886-e16e-47e8-a2ce-a3ac2f344e00",
              title: "Project Duration",
              paragrp: "October 2023 to February 2024.",
            },
          ],
        },
        {
          id: 2,
          data: [
            {
              id: 1,
              icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/problem.svg?alt=media&token=94ab326e-4144-4f07-83e7-93eef6bcd6bf",
              title: "The Problem",
              paragrp: [
                {
                  id: 1,
                  p: "Busy workers, College Students and commuters lack the time necessary to prepare a meal or lack the time to go out for dine-in.",
                  q: false,
                },
              ],
            },
            {
              id: 2,
              icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/goal.svg?alt=media&token=a113e7c1-2eb5-474a-82fa-0599bf3b09df",
              title: "The Goal",
              paragrp: [
                {
                  id: 1,
                  p: `Design an app that allows users to easily order and get quickly delivered the food at their doorstep.`,
                  q: false,
                },
              ],
            },
          ],
        },

        {
          id: 3,
          data: [
            {
              id: 1,
              icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/role.svg?alt=media&token=6c4e497d-993c-4f90-8b12-dcb4bd9f4ad1",
              title: "My Role",
              paragrp: [
                {
                  id: 1,
                  p: "UX designer designing an app from conception to food delivery.",
                  q: false,
                },
              ],
            },
            {
              id: 2,
              icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/responsibility.svg?alt=media&token=9f91292b-801b-4da3-9649-1e9edf925722",
              title: "Responsibilities",
              paragrp: [
                {
                  id: 1,
                  p: `Conducting interviews, storyboards, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, and iterating on designs.`,
                  q: false,
                },
              ],
            },
          ],
        },

        {
          id: 4,
          navSlideTitle: "Understanding the user",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/angle-left-solid.svg?alt=media&token=a00f59f6-5c7a-4aaf-938d-c7be4406f2aa",
          navSlideList: [
            {
              id: 1,
              slidelink: 5,
              slideName: "User Research",
            },
            {
              id: 2,
              slidelink: 7,
              slideName: "Personas",
            },
            {
              id: 3,
              slidelink: 7,
              slideName: "Problem Statements",
            },
            {
              id: 4,
              slidelink: 8,
              slideName: "User Journey Maps",
            },
          ],
        },
        {
          id: 5,
          title: "User research : Summery",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/summery.svg?alt=media&token=f7c2af8d-ae73-4aba-8b98-ffd4cec4d4e9",
          paragrp: [
            {
              id: 1,
              para: `I conducted interviews and created empathy maps to understand the users I’m
              designing for and their needs. A primary user group identified through research
              was college student’s and working adults who don’t have time to cook meals or
             can’t go out for dine-in.`,
            },
            {
              id: 2,
              para: `This user group confirmed initial assumptions about QuickMeals customers, but research
              also revealed that time was not the only factor limiting users from cooking at home.
              Other user problems included obligations, interests, or challenges that make it
              difficult to get groceries for cooking or go to restaurants in-person`,
            },
          ],
        },

        {
          id: 6,
          title: "User research : Pain Points",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/painpoints.svg?alt=media&token=3e2ff6b6-17c5-4819-8d94-6082a21e0a55",
          points: [
            {
              id: 1,
              point: "Availability",
              details:
                "Platforms for ordering food available to deliver food in very small parts of the city",
            },

            {
              id: 2,
              point: "Time",
              details:
                "In Hectic schedule students can’t go out for dine-in a healthy meal.",
            },

            {
              id: 3,
              point: "Accessibility",
              details:
                "Platforms for ordering food are not equipped with assistive technologies.",
            },
          ],
        },

        {
          id: 7,
          name: "Persona: SAHIL",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/person.svg?alt=media&token=a4f1bca2-6fde-42db-b7cb-59c88c3dcfde",
          problem: "Problem Statement",
          photo:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/persona.png?alt=media&token=6b40b5a3-ad14-49db-b456-40998ea4ed33",
          personaName: "SAHIL",
          personaQuote: "Eat, Sleep, Code & Repeat",
          paragrp:
            "SAHIL is an final year undergraduate student who needs to get food delivered at his hostel room doorstep because he doesn't have to go outside and keep the focus on the project study",
          profileInfo: [
            {
              id: 1,
              infoTitle: "Age",
              infoDetails: "21",
            },

            {
              id: 2,
              infoTitle: "Education",
              infoDetails: "Bsc",
            },
            {
              id: 3,
              infoTitle: "Hometown",
              infoDetails: "Amravati",
            },
            {
              id: 4,
              infoTitle: "Family",
              infoDetails: "Mother, Father",
            },
            {
              id: 5,
              infoTitle: "Occupation",
              infoDetails: "Student",
            },
          ],
          profileInsight: [
            {
              id: 1,
              title: "Goals",
              paragrp: [
                {
                  id: 1,
                  para: "To order Food online anytime and get food at my doorstep delivered.",
                },
                {
                  id: 2,
                  para: "To track my food status and also track the delivery person's live location.",
                },
              ],
            },
            {
              id: 2,
              title: "Frustations",
              paragrp: [
                {
                  id: 1,
                  para: "The app doesn’t fetch my address location automatically using GPS. Manually typed.",
                },
                {
                  id: 2,
                  para: "The schedule delivery option is not available for advanced food order.",
                },
              ],
            },
          ],

          personaBio:
            "Sahil is about to complete his BSC in computer, He lives in a hostel,  Sahil and his project partner making their final year computer project. In his busy schedule he doesn't want to go out for dining it will almost take one hour to get back to his hostel.  He and His project partner need to focus on project work to get a better score.",
        },

        {
          id: 8,
          slideIcon:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/userjourney.svg?alt=media&token=cb8ef8d6-0e26-4bd5-bca6-0680ce30e4a5",
          slideTitle: "user journey maps",
          slideStatement:
            "Mapping SAHIL’s user journey revealed how helpful it would be for users to have access to a dedicated QuickMeals app.",
          slidePersonaName: "Persona: SAHIL",
          slidePersonaAbout: "Goal: Get food delivered at doorstep",
          slideTable: [
            {
              id: 1,
              tableHeadTitle: [
                { id: 1, title: "Action" },
                { id: 2, title: "Get App" },
                { id: 3, title: "Select Restaurant" },
                { id: 4, title: "Confirm Order" },
                { id: 5, title: "Track Order Status" },
                { id: 6, title: "Receive The Order" },
              ],
            },

            {
              id: 2,
              tableBodyTitle: [
                {
                  id: 1,
                  tableRowData: [
                    { id: 1, rowData: [{ id: 1, rowDataInfo: "TASK-LIST" }] },
                    {
                      id: 2,
                      rowData: [
                        {
                          id: 1,
                          rowDataInfo:
                            "A. Check the revies and rating on the play store or appstore.",
                        },
                        {
                          id: 2,
                          rowDataInfo: "B. Install the app.",
                        },
                        {
                          id: 3,
                          rowDataInfo: "C. Create/login account",
                        },
                      ],
                    },
                    {
                      id: 3,
                      rowData: [
                        {
                          id: 1,
                          rowDataInfo: "A. Submit Location.",
                        },
                        {
                          id: 2,
                          rowDataInfo: "B. Decide the restaurant with items.",
                        },
                        {
                          id: 3,
                          rowDataInfo: "C. Add items to the cart",
                        },
                      ],
                    },

                    {
                      id: 4,
                      rowData: [
                        {
                          id: 1,
                          rowDataInfo: "A. Check out the order.",
                        },
                        {
                          id: 2,
                          rowDataInfo: "B. Add details.",
                        },
                        {
                          id: 3,
                          rowDataInfo: "C. Make payment.",
                        },
                        {
                          id: 4,
                          rowDataInfo: "D. Order completed.",
                        },
                      ],
                    },

                    {
                      id: 5,
                      rowData: [
                        {
                          id: 1,
                          rowDataInfo: "A. Track food status.",
                        },
                        {
                          id: 2,
                          rowDataInfo: "B. Check order dispatched.",
                        },
                      ],
                    },

                    {
                      id: 6,
                      rowData: [
                        {
                          id: 1,
                          rowDataInfo: "A. Order received/collected.",
                        },
                        {
                          id: 2,
                          rowDataInfo: "B. Check the items.",
                        },
                        {
                          id: 3,
                          rowDataInfo: "C. Eat food.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 2,
                  tableRowData: [
                    {
                      id: 1,
                      rowData: [{ id: 1, rowDataInfo: "FEELING ADJECTIVE" }],
                    },
                    {
                      id: 2,
                      rowData: [
                        {
                          id: 1,
                          rowDataInfo:
                            "Not sure that this app is serviceable for my area or city.",
                        },
                      ],
                    },
                    {
                      id: 3,
                      rowData: [
                        {
                          id: 1,
                          rowDataInfo:
                            "Difficulty in narrowing down the search.",
                        },
                      ],
                    },

                    {
                      id: 4,
                      rowData: [
                        {
                          id: 1,
                          rowDataInfo: "Does not like to save card detail.",
                        },
                      ],
                    },

                    {
                      id: 5,
                      rowData: [
                        {
                          id: 1,
                          rowDataInfo:
                            "Difficulty in narrowing down the search.",
                        },
                      ],
                    },

                    {
                      id: 6,
                      rowData: [
                        {
                          id: 1,
                          rowDataInfo: "Food quality standards.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 3,
                  tableRowData: [
                    {
                      id: 1,
                      rowData: [
                        { id: 1, rowDataInfo: "IMPROVEMENT OPPORTUNITIES" },
                      ],
                    },
                    {
                      id: 2,
                      rowData: [
                        {
                          id: 1,
                          rowDataInfo: "List availability region and city.",
                        },
                      ],
                    },
                    {
                      id: 3,
                      rowData: [
                        {
                          id: 1,
                          rowDataInfo:
                            "Add the expected delivery time for each restaurant.",
                        },
                      ],
                    },

                    {
                      id: 4,
                      rowData: [
                        {
                          id: 1,
                          rowDataInfo:
                            "The address should be fetched automatically.",
                        },
                      ],
                    },

                    {
                      id: 5,
                      rowData: [
                        {
                          id: 1,
                          rowDataInfo: "Order tracking link.",
                        },
                      ],
                    },

                    {
                      id: 6,
                      rowData: [
                        {
                          id: 1,
                          rowDataInfo: "Feedback for delivery.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 9,
          navSlideTitle: "Starting the design",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/angle-left-solid.svg?alt=media&token=a00f59f6-5c7a-4aaf-938d-c7be4406f2aa",
          navSlideList: [
            {
              id: 1,
              slidelink: 10,
              slideName: "Paper Wireframes",
            },
            {
              id: 2,
              slidelink: 11,
              slideName: "Digital Wireframes",
            },
            {
              id: 3,
              slidelink: 13,
              slideName: "Low-Fidelity Prototype",
            },
            {
              id: 4,
              slidelink: 14,
              slideName: "Usability Studies",
            },
          ],
        },
        {
          id: 10,
          title: "Paper Wireframe",
          info: "Taking the time to draft iterations of each screen of the app on paper ensured that the elements that made it to digital wireframes would be well-suited to address user pain points. For the home screen, I narrow down the item search to help users quick and easy ordering process and save time.",
          pwfPhoto:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/qmpaper.jpg?alt=media&token=37ceeae6-6ef0-44fc-99ef-86fc903258b6",
          photoCap:
            "Stars were used to mark the elements of each sketch that would be used in the initial digital wireframes.",
        },
        {
          id: 11,
          title: "Digital Wireframe",
          icon1:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/findingLeft.svg?alt=media&token=48496be6-6de1-4b81-8691-a6952ca8a079",
          icon2:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/findingRight.svg?alt=media&token=766c6261-a28a-418e-943d-35a5b23d02d4",
          info: "As the initial design phase continued, I made sure to base screen designs on feedback and findings from  the user research.",
          dwfPhoto:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/qm%20wireframe%20homepage.png?alt=media&token=466562d3-3a9a-4f87-896c-f12594954102",
          finding1:
            "This element at the home screen makes it fast and easy for users to order.",
          finding2:
            "This Button at the home screen narrow down user search which makes it fast and easy for users to order.",
        },

        {
          id: 12,
          title: "Digital Wireframe",
          icon1: null,
          icon2:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/findingRight.svg?alt=media&token=766c6261-a28a-418e-943d-35a5b23d02d4",
          info: "Easy navigation was a key user need to address in the designs in addition to equipping the app to work with assistive technologies.",
          dwfPhoto:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/qm%20wireframe%20navig.png?alt=media&token=726e2b2f-12c5-4953-a145-5ca043d1890d",
          finding2: "Easy access to navigation buttons with icons",
          finding1: null,
        },

        {
          id: 13,
          title: "Low-fidelity prototype",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/angle-left-solid.svg?alt=media&token=a00f59f6-5c7a-4aaf-938d-c7be4406f2aa",
          info: "Using the completed set of digital wireframes, I created a low-fidelity prototype. The primary user flow I connected ordering a food, so the prototype could be used in a usability study. ",
          pPhoto:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/qmlofi-prototype.png?alt=media&token=01b2ed0d-eef7-4696-b572-9de81ee05d36",
          linkCap: "View the Quick Meals : Low-fidelity prototype",
          protoLink: [
            {
              id: 1,
              screen: "Mobile",
              link: "https://www.figma.com/proto/F9zNRQJcZ8vJ0L7wSa1fhR/Wireframing-in-Figma?page-id=0%3A1&type=design&node-id=338-941&viewport=785%2C-672%2C0.16&t=MoESISpuYjNx6fK6-1&scaling=scale-down&starting-point-node-id=338%3A941&show-proto-sidebar=1&mode=design",
            },
          ],
        },
        {
          id: 14,
          title: "Usability study : findings",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/studyFindings.svg?alt=media&token=f2a25d73-eb5a-412a-9918-70de1d0ec087",
          data: [
            {
              id: 1,
              info: "Round 1 findings",
              data: [
                {
                  id: 1,
                  info: "Users want to order quickly from their order history.",
                },
                {
                  id: 2,
                  info: "Users want a delivery option",
                },
              ],
            },

            {
              id: 2,
              info: "Round 2 findings",
              data: [
                {
                  id: 1,
                  info: "User want know expected delivery time of each store.",
                },
                {
                  id: 2,
                  info: "User want to see rating of the store",
                },
                {
                  id: 3,
                  info: "Users want a schedule delivery option.",
                },
                {
                  id: 4,
                  info: "Users want a use coupon code option.",
                },
              ],
            },
          ],
        },

        {
          id: 15,
          navSlideTitle: "Refining the design",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/angle-left-solid.svg?alt=media&token=a00f59f6-5c7a-4aaf-938d-c7be4406f2aa",
          navSlideList: [
            {
              id: 1,
              slidelink: 16,
              slideName: "Mockups",
            },
            {
              id: 2,
              slidelink: 19,
              slideName: "High-fidelity prototype",
            },
            {
              id: 3,
              slidelink: 20,
              slideName: "Accessibility",
            },
          ],
        },

        {
          id: 16,
          title: "Mockup",
          info: `Early designs allowed for some customization, but after the usability
          studies, I understand that user want to add  multiple items in the
          cart. Then I added additional options a buttons to the item card for
          item quantity.`,
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/findingLeft.svg?alt=media&token=48496be6-6de1-4b81-8691-a6952ca8a079",
          photoBefore:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/itemListBefore.png?alt=media&token=7fe9e2e3-994c-4640-b166-494de3f96ed7",
          imgCap1: "Before usability study",
          photoAfter:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/itemListAfter.png?alt=media&token=4f4ade63-f0a2-4b72-b96a-f012de25b2a5",
          imgCap2: "After usability study",
        },
        {
          id: 17,
          title: "Mockup",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/findingLeft.svg?alt=media&token=48496be6-6de1-4b81-8691-a6952ca8a079",
          info: `The second usability study revealed that user want schedule delivery
          option and want to use coupon code. I added the schedule delivery
          option and coupon code option in cart page. User will able to see
          schedule delivery option if available items can be scheduled in “Order
          summary”.`,
          photo1:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/cartBefore.png?alt=media&token=91f41cc6-e461-430c-aa43-36d6d1e3bc71",
          pcap1: "Before usability 2",
          photo2:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/cartAfter.png?alt=media&token=075e4435-afd5-40b9-ba26-6fd0c494f7c5",
          pcap2: "After usability 2",
          photo3:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/cartAfter2.png?alt=media&token=58e9fa1c-73f2-44f7-98f6-26538544fd64",
        },

        {
          id: 18,
          title: "Mockup",

          photos: [
            {
              id: 1,
              image:
                "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/home.png?alt=media&token=065a177a-2b65-42a0-873c-ad237fda441c",
            },
            {
              id: 2,
              image:
                "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/itemListAfter.png?alt=media&token=4f4ade63-f0a2-4b72-b96a-f012de25b2a5",
            },
            {
              id: 3,
              image:
                "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/restaList.png?alt=media&token=523422ce-c031-4b86-a025-1acca6e76e99",
            },
            {
              id: 4,
              image:
                "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/cartAfter.png?alt=media&token=075e4435-afd5-40b9-ba26-6fd0c494f7c5",
            },
          ],
        },

        {
          id: 19,
          title: "Hi-fidelity prototype",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/angle-left-solid.svg?alt=media&token=a00f59f6-5c7a-4aaf-938d-c7be4406f2aa",
          info: "The final high-fidelity prototype presented cleaner user flows for selecting food items and checkout. It also meet user needs for a schedule delivery option. ",
          pPhoto:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/hifiprototype.png?alt=media&token=141bcb01-3057-4c87-b8c9-5839d947dc87",
          linkCap: "View the Quick Meals : High-fidelity prototype",
          protoLink: [
            {
              id: 1,
              screen: "Mobile",
              link: "https://www.figma.com/proto/F9zNRQJcZ8vJ0L7wSa1fhR/Wireframing-in-Figma?page-id=1208%3A4434&type=design&node-id=1208-4435&viewport=876%2C499%2C0.21&t=jUJFYsoHNgDnztqD-1&scaling=scale-down&starting-point-node-id=1208%3A5586&mode=design",
            },
            {
              id: 2,
              screen: "Desktop",
              link: "https://www.figma.com/proto/F9zNRQJcZ8vJ0L7wSa1fhR/Wireframing-in-Figma?page-id=2042%3A4899&type=design&node-id=2042-6591&viewport=573%2C706%2C0.07&t=jSjOIqbHSNulxwqk-1&scaling=scale-down&starting-point-node-id=2042%3A6591&mode=design",
            },
            {
              id: 3,
              screen: "Tablet",
              link: "https://www.figma.com/proto/F9zNRQJcZ8vJ0L7wSa1fhR/Wireframing-in-Figma?page-id=2091%3A3755&type=design&node-id=2091-3756&viewport=196%2C1604%2C0.15&t=QncqDUAISdrXbKFS-1&scaling=scale-down&starting-point-node-id=2091%3A3756&mode=design",
            },
          ],
        },
        {
          id: 20,
          title: "Accessibility considerations",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/accessibility.svg?alt=media&token=640b1110-eb91-479e-8704-a0514392c68b",
          points: [
            {
              id: 1,
              point: false,
              details: "Used icons to help make navigation easier.",
            },

            {
              id: 2,
              point: false,
              details:
                "Used detailed imagery for restaurants and menu items help all users better understand the designs.",
            },

            {
              id: 3,
              point: false,
              details:
                "Provided access to users who are vision impaired through adding alt text to images for screen readers.",
            },
          ],
        },

        {
          id: 21,
          navSlideTitle: "Going forward",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/angle-left-solid.svg?alt=media&token=a00f59f6-5c7a-4aaf-938d-c7be4406f2aa",
          navSlideList: [
            {
              id: 1,
              slidelink: 22,
              slideName: "Takeaways",
            },
            {
              id: 2,
              slidelink: 23,
              slideName: "Next steps",
            },
          ],
        },
        {
          id: 22,
          data: [
            {
              id: 1,
              icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/impact.svg?alt=media&token=02bdbc9a-1bf5-4d21-b8dc-e2221765add7",
              title: "Impact",
              paragrp: [
                {
                  id: 1,
                  p: "The app makes users feel like QuickMeals really thinks about how to meet their needs.",
                  q: false,
                },
                {
                  id: 2,
                  p: "One quote from peer feedback:",
                  q: "The app made it so easy and cleaner way to order food! I would definitely use this app as a go-to for a delicious, fast, and even healthy meal.",
                },
              ],
            },
            {
              id: 2,
              icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/learn.svg?alt=media&token=dceb6407-7acf-4f8d-a76e-fa5b0fee76b8",
              title: "What I learned",
              paragrp: [
                {
                  id: 1,
                  p: `While designing the QuickMeals app, I learned that the first ideas
                  for the app are only the beginning of the process. Usability studies
                  and peer feedback influenced each iteration of the app’s designs.`,
                  q: false,
                },
              ],
            },
          ],
        },
        {
          id: 23,
          title: "Next Steps",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/nextsteps.svg?alt=media&token=5c76623a-99a6-47b5-b8e7-95559568d7f0",
          points: [
            {
              id: 1,
              point: false,
              details:
                "Conduct more user research to determine any new areas of need.",
            },

            {
              id: 2,
              point: false,
              details:
                "Conduct another round of usability studies to validate whether the pain points users experienced have been effectively addressed.",
            },
          ],
        },
        {
          id: 24,
          title: "Let’s connect!",
          icon1:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/connect.svg?alt=media&token=07c61797-4b8a-456f-8130-09a2b346cf58",
          icon2:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/mail.svg?alt=media&token=6cbf7beb-a360-4090-9f53-1bdde6e2288b",
          paragrp:
            "Thank you for your time reviewing my work on the QuickMeals app! If you’d like to see more or get in touch, my contact information is provided below.",
          contactMail: "saagartakore@gmail.com",
        },
      ],
    },
  },

  {
    id: 2,
    project: {
      thumbnail: "CER thumbnail.png",
      logo: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/cerLogo.png?alt=media&token=1eff0d8d-eb6d-40a4-9616-1dd9d3dc44b8",
      name: "currency exchange",
      angleButton:
        "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/angle-left-solid.svg?alt=media&token=a00f59f6-5c7a-4aaf-938d-c7be4406f2aa",
      data: [
        {
          id: 0,
          projectTitle: "Currency Exchange Rate App Design",
          author: "SAAGAR TAKORE",
        },
        {
          id: 1,
          introImg:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/cerIntro.png?alt=media&token=3009f47f-1958-45d0-9237-543d189fa85d",
          introInfo: [
            {
              id: 1,
              icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/theproduct.svg?alt=media&token=7f1b1040-6e02-4b2d-a892-899d184d4a1c",
              title: "The Product",
              paragrp:
                "The CER a Currency Exchange Rate app is used to determine the value of various currencies in relation to each other in just a few seconds. Target customers like business persons and global travelers can track currency exchange rates and also it provides accurate real-time results on the go!",
            },
            {
              id: 2,
              icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/duration.svg?alt=media&token=e8f72886-e16e-47e8-a2ce-a3ac2f344e00",
              title: "Project Duration",
              paragrp: "November 2023 to March 2024.",
            },
          ],
        },
        {
          id: 2,
          data: [
            {
              id: 1,
              icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/problem.svg?alt=media&token=94ab326e-4144-4f07-83e7-93eef6bcd6bf",
              title: "The Problem",
              paragrp: [
                {
                  id: 1,
                  p: "Global travellers make plenty of transactions online, and calculating the correct real-time currency rate is often a problem for most people.",
                  q: false,
                },
              ],
            },
            {
              id: 2,
              icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/goal.svg?alt=media&token=a113e7c1-2eb5-474a-82fa-0599bf3b09df",
              title: "The Goal",
              paragrp: [
                {
                  id: 1,
                  p: `Design an app that allows users to easily check or calculate the correct real-time currency rate quickly.`,
                  q: false,
                },
              ],
            },
          ],
        },

        {
          id: 3,
          data: [
            {
              id: 1,
              icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/role.svg?alt=media&token=6c4e497d-993c-4f90-8b12-dcb4bd9f4ad1",
              title: "My Role",
              paragrp: [
                {
                  id: 1,
                  p: "UX designer designing an app from conception to currency exchange rates.",
                  q: false,
                },
              ],
            },
            {
              id: 2,
              icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/responsibility.svg?alt=media&token=9f91292b-801b-4da3-9649-1e9edf925722",
              title: "Responsibilities",
              paragrp: [
                {
                  id: 1,
                  p: `Conducting interviews, storyboards, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, and iterating on designs.`,
                  q: false,
                },
              ],
            },
          ],
        },

        {
          id: 4,
          navSlideTitle: "Understanding the user",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/angle-left-solid.svg?alt=media&token=a00f59f6-5c7a-4aaf-938d-c7be4406f2aa",
          navSlideList: [
            {
              id: 1,
              slidelink: 5,
              slideName: "User Research",
            },
            {
              id: 2,
              slidelink: 7,
              slideName: "Persona",
            },
            {
              id: 3,
              slidelink: 7,
              slideName: "Problem Statements",
            },
          ],
        },

        {
          id: 5,
          title: "User research : Summery ",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/summery.svg?alt=media&token=f7c2af8d-ae73-4aba-8b98-ffd4cec4d4e9",
          paragrp: [
            {
              id: 1,
              para: "I conducted interviews and created empathy maps to understand the users I was designing for and their needs.A primary user group identified through research  was business persons and global travelers who make plenty of transactions online while travelling, calculating the correct real-time currency rate is often a problem for most people.",
            },
            {
              id: 2,
              para: "This user group confirmed initial assumptions about CRE customers, but research also revealed that calculating the correct real-time currency rate was not the only factor. Other user problems included finding an authorised location where users get currency exchange in a cash.",
            },
          ],
        },

        {
          id: 6,
          title: "User research : Pain Points",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/painpoints.svg?alt=media&token=3e2ff6b6-17c5-4819-8d94-6082a21e0a55",
          points: [
            {
              id: 1,
              point: "Real Time",
              details: "Calculate multiple real-time currency exchange rates.",
            },

            {
              id: 2,
              point: "Location",
              details: "Authorise currency exchange location.",
            },

            {
              id: 3,
              point: "Accessibility",
              details:
                "Platforms for currency exchange rates are not equipped with assistive technologies.",
            },
          ],
        },

        {
          id: 7,
          name: "Persona: RAMDAS",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/person.svg?alt=media&token=a4f1bca2-6fde-42db-b7cb-59c88c3dcfde",
          problem: "Problem Statement",
          photo:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/persona2.png?alt=media&token=3e3f6e9b-309b-4ff0-be23-3131c4b1b282",
          personaName: "RAMDAS",
          personaQuote:
            "Entrepreneurship is neither a science nor an art. It is a practice.",
          paragrp:
            "RAMDAS is a businessman who owns multiple companies. He needs to know or calculate currency exchange rates in real-time to make decisions about good profitable business deals.",

          profileInfo: [
            {
              id: 1,
              infoTitle: "Age",
              infoDetails: "51",
            },

            {
              id: 2,
              infoTitle: "Education",
              infoDetails: "MBA",
            },
            {
              id: 3,
              infoTitle: "Hometown",
              infoDetails: "Pune",
            },
            {
              id: 4,
              infoTitle: "Family",
              infoDetails: "Spouse, Daughter",
            },
            {
              id: 5,
              infoTitle: "Occupation",
              infoDetails: "business",
            },
          ],

          profileInsight: [
            {
              id: 1,
              title: "Goals",
              paragrp: [
                {
                  id: 1,
                  para: "Able to check any country currency exchange rate.",
                },
                {
                  id: 2,
                  para: "Want to see real-time currencyexchange rate from hundreds of currency’s to each other.",
                },
              ],
            },
            {
              id: 2,
              title: "Frustations",
              paragrp: [
                {
                  id: 1,
                  para: "Calculating the correct currency rate every time by yourself self is very annoying.",
                },
                {
                  id: 2,
                  para: "Wanted to convert currency he had into multiple currencies simultaneously in real time exchange rates.",
                },
              ],
            },
          ],

          personaBio:
            "RAMDAS is a middle-aged man who owns multiple companies, with a very busy and demanding schedule. He travels globally very often for client meetings to get business deals. Well informed real-time currency exchange rates helps to decision-making for business deals. The best rates enables him to make informed decisions and allowing the company to optimize profits and mitigate financial risks.",
        },
        {
          id: 9,
          navSlideTitle: "Starting the design",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/angle-left-solid.svg?alt=media&token=a00f59f6-5c7a-4aaf-938d-c7be4406f2aa",
          navSlideList: [
            {
              id: 1,
              slidelink: 9,
              slideName: "Paper Wireframes",
            },
            {
              id: 2,
              slidelink: 10,
              slideName: "Digital Wireframes",
            },
            {
              id: 3,
              slidelink: 12,
              slideName: "Low-Fidelity Prototype",
            },
            {
              id: 4,
              slidelink: 13,
              slideName: "Usability Studies",
            },
          ],
        },
        {
          id: 10,
          title: "Paper Wireframe",
          info: "Taking the time to draft iterations of each screen of the app on paper ensured that the elements that made it to digital wireframes would be well-suited to address user pain points. For the home screen, users are able to calculate the currency exchange rate quickly and easily.",
          pwfPhoto:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/cerPaper.jpg?alt=media&token=7d693bb2-c1da-44a0-a38b-a93e417f6c82",
          photoCap:
            "Stars were used to mark the elements of each sketch that would be used in the initial digital wireframes.",
        },

        {
          id: 11,
          icon1: null,
          icon2:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/findingRight.svg?alt=media&token=766c6261-a28a-418e-943d-35a5b23d02d4",
          title: "Digital Wireframe",
          info: "As the initial design phase continued, I made sure to base screen designs on feedback and findings from  the user research.",
          dwfPhoto:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/cerHomepage.png?alt=media&token=d0f0d2bf-1653-4fa8-9f77-54a7a49b0221",
          finding2:
            "This element at the home screen makes it fast and easy to check currency rates from history.",
          finding1: null,
        },
        {
          id: 12,
          icon1: null,
          icon2:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/findingRight.svg?alt=media&token=766c6261-a28a-418e-943d-35a5b23d02d4",
          title: "Digital Wireframe",
          info: "Easy navigation was a key user need to address in the designs in addition to equipping the app to work with assistive technologies.",
          dwfPhoto:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/cerNav.png?alt=media&token=34137e50-518d-4cde-89d8-c5e2469d27e0",
          finding2: "Easy access to navigation buttons with icons",
          finding1: null,
        },
        {
          id: 13,
          title: "Low-fidelity prototype",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/angle-left-solid.svg?alt=media&token=a00f59f6-5c7a-4aaf-938d-c7be4406f2aa",
          info: "Using the completed set of digital wireframes, I created a low-fidelity prototype. In the primary user flow, I connected to calculate the currency exchange rate, so the prototype could be used in a usability study. ",
          pPhoto:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/lofi%20digi%20prototype.png?alt=media&token=ce6fd935-c112-48f3-8917-8ad83e23238b",
          linkCap: "View the Currency Exchange : Low-fidelity prototype",
          protoLink: [
            {
              id: 1,
              screen: "Desktop",
              link: "https://www.figma.com/proto/F9zNRQJcZ8vJ0L7wSa1fhR/Wireframing-in-Figma?page-id=2266%3A4484&type=design&node-id=2287-70&viewport=167%2C399%2C0.19&t=ogbi3RwZV0KuqHau-1&scaling=scale-down&mode=design",
            },
          ],
        },

        {
          id: 14,
          title: "Usability study : findings",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/studyFindings.svg?alt=media&token=f2a25d73-eb5a-412a-9918-70de1d0ec087",
          data: [
            {
              id: 1,
              info: "Round 1 findings",
              data: [
                {
                  id: 1,
                  info: "Users want to quickly calculate from their recent currency check.",
                },
              ],
            },

            {
              id: 2,
              info: "Round 2 findings",
              data: [
                {
                  id: 1,
                  info: "User want know address of authorised  currency exchange agents.",
                },
              ],
            },
          ],
        },

        {
          id: 15,
          navSlideTitle: "Refining the design",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/angle-left-solid.svg?alt=media&token=a00f59f6-5c7a-4aaf-938d-c7be4406f2aa",
          navSlideList: [
            {
              id: 1,
              slidelink: 15,
              slideName: "Mockups",
            },
            {
              id: 2,
              slidelink: 18,
              slideName: "High-fidelity prototype",
            },
            {
              id: 3,
              slidelink: 19,
              slideName: "Accessibility",
            },
          ],
        },

        {
          id: 16,
          title: "Mockup",
          info: `Early designs allowed for some customization, but after the usability 
            studies, I understand that the user wants to know the history of currency
            calculation. Then I added the list of history and one-click buttons to 
            calculate and show the result in real time.`,
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/findingLeft.svg?alt=media&token=48496be6-6de1-4b81-8691-a6952ca8a079",
          photoBefore:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/cerHomepageAfter.png?alt=media&token=d45f6a18-281d-4c17-9266-1c5f16c8f4be",
          imgCap1: "Before usability study",
          photoAfter:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/cerHomepage.png?alt=media&token=d0f0d2bf-1653-4fa8-9f77-54a7a49b0221",
          imgCap2: "After usability study",
        },
        {
          id: 17,
          title: "Mockup",
          info: ` The second usability study revealed that users want to know the contact details of currency exchange agents in visiting cities. 
          I added a new page for get location of currency exchange agents. Users will be able to select the visiting country and city and get the
          contact details of authorised currency exchange agents.`,
          icon: false,
          photo1:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/cerLocation.png?alt=media&token=5b2f78e1-779a-410e-bbbd-311142766133",
          pcap1: "After usability study 2",
          photo2: false,
          pcap2: false,
          photo3: false,
        },

        {
          id: 18,
          title: "Mockup",

          photos: [
            {
              id: 1,
              image:
                "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/cerHome.png?alt=media&token=0762e3d6-bf15-4f67-a86a-5e57983e7a4c",
            },
            {
              id: 2,
              image:
                "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/cerSearch.png?alt=media&token=ae652e94-324f-4129-9f9e-19b7e1e76a97",
            },
            {
              id: 3,
              image:
                "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/cerResult.png?alt=media&token=fa57ba84-8be3-4f76-9a12-88535952e70e",
            },
          ],
        },

        {
          id: 19,
          title: "Hi-fidelity prototype",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/angle-left-solid.svg?alt=media&token=a00f59f6-5c7a-4aaf-938d-c7be4406f2aa",
          info: "The final high-fidelity prototype presented cleaner user flows from selecting currency to get exchange rate. User also able to locate currency exchange agents.",
          pPhoto:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/cerHifiPrototype.png?alt=media&token=02aa2f14-0e75-43a4-a95b-771cf0455447",
          linkCap: "View the Currency Exchange : High-fidelity prototype",
          protoLink: [
            {
              id: 1,
              screen: "Mobile",
              link: "https://www.figma.com/proto/F9zNRQJcZ8vJ0L7wSa1fhR/Wireframing-in-Figma?page-id=2352%3A5044&type=design&node-id=2352-5356&viewport=75%2C800%2C0.69&t=CSUQa4psDyluFLau-1&scaling=scale-down&mode=design",
            },
            {
              id: 2,
              screen: "Desktop",
              link: "https://www.figma.com/proto/F9zNRQJcZ8vJ0L7wSa1fhR/Wireframing-in-Figma?page-id=2512%3A91&type=design&node-id=2512-92&viewport=245%2C590%2C0.14&t=gDxXjW0mbblwJFZp-1&scaling=scale-down&mode=design",
            },
            {
              id: 3,
              screen: "Tablet",
              link: "https://www.figma.com/proto/F9zNRQJcZ8vJ0L7wSa1fhR/Wireframing-in-Figma?page-id=2464%3A89&type=design&node-id=2464-263&viewport=97%2C718%2C0.43&t=B6IDufzces95g439-1&scaling=scale-down&mode=design",
            },
          ],
        },

        {
          id: 20,
          title: "Accessibility Considerations",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/accessibility.svg?alt=media&token=640b1110-eb91-479e-8704-a0514392c68b",
          points: [
            {
              id: 1,
              point: false,
              details:
                "Used detailed imagery for flags of countries and monuments of cities to help all users better understand the designs.",
            },

            {
              id: 2,
              point: false,
              details: "Used icons to help make navigation easier.",
            },

            {
              id: 3,
              point: false,
              details:
                "Provided access to users who are vision impaired through adding alt text to images for screen readers.",
            },
          ],
        },
        {
          id: 21,
          navSlideTitle: "Going forward",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/angle-left-solid.svg?alt=media&token=a00f59f6-5c7a-4aaf-938d-c7be4406f2aa",
          navSlideList: [
            {
              id: 1,
              slidelink: 21,
              slideName: "Takeaways",
            },
            {
              id: 2,
              slidelink: 22,
              slideName: "Next steps",
            },
          ],
        },

        {
          id: 22,
          data: [
            {
              id: 1,
              icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/impact.svg?alt=media&token=02bdbc9a-1bf5-4d21-b8dc-e2221765add7",
              title: "Impact",
              paragrp: [
                {
                  id: 1,
                  p: "The app makes users feel like CER really thinks about how to meet their needs.",
                  q: false,
                },
                {
                  id: 2,
                  p: "One quote from peer feedback:",
                  q: "Express exchange rate calculator of hundreds of currencies! I would definitely use this app.",
                },
              ],
            },
            {
              id: 2,
              icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/learn.svg?alt=media&token=dceb6407-7acf-4f8d-a76e-fa5b0fee76b8",
              title: "What I learned",
              paragrp: [
                {
                  id: 1,
                  p: `While designing the CER app, I learned that the first ideas for the app are only the beginning of the process. Usability studies and peer feedback influenced each iteration of the app’s designs.`,
                  q: false,
                },
              ],
            },
          ],
        },

        {
          id: 23,
          title: "Next Steps",
          icon: "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/nextsteps.svg?alt=media&token=5c76623a-99a6-47b5-b8e7-95559568d7f0",
          points: [
            {
              id: 1,
              point: false,
              details:
                "Conduct more user research to determine any new areas of need.",
            },

            {
              id: 2,
              point: false,
              details:
                "Conduct another round of usability studies to validate whether the pain points users experienced have been effectively addressed.",
            },
          ],
        },
        {
          id: 24,
          title: "Let’s connect!",
          icon1:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/connect.svg?alt=media&token=07c61797-4b8a-456f-8130-09a2b346cf58",
          icon2:
            "https://firebasestorage.googleapis.com/v0/b/svgs-18952.appspot.com/o/mail.svg?alt=media&token=6cbf7beb-a360-4090-9f53-1bdde6e2288b",
          paragrp:
            "Thank you for your time reviewing my work on the CRE app! If you’d like to see more or get in touch, my contact information is provided below.",
          contactMail: "saagartakore@gmail.com",
        },
      ],
    },
  },
];

export default myPortfolioData;
