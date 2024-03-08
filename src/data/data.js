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
      ],
    },
  },
];

export default myPortfolioData;
