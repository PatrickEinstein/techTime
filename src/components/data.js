import { CompanyModule, faker } from "@faker-js/faker";
import { Typography } from "@mui/material";
import { Clock, CurrencyDollar, GraduationCap, PersonSimpleRun } from "phosphor-react";

export const Features = [
    {
        logo: <GraduationCap />,
        Heading: "Experienced Mentors",
        Description: <Typography variant="subtitle2" align="center"
        >
            High Definition video is Video of Higher Resolution
            And Quality Than Standard Definition. While There
            
        </Typography>
    },
    {
        logo: < PersonSimpleRun />,
        Heading: "Affordable Prices",
        Description: <Typography variant="subtitle2" align="center"
        >
            High Definition video is Video of Higher Resolution
            And Quality Than Standard Definition. While There
            
        </Typography>
    },
    {
        logo: <CurrencyDollar />,
        Heading: "Affordable Prices",
        Description: <Typography variant="subtitle2" align="center"
        >
            High Definition video is Video of Higher Resolution
            And Quality Than Standard Definition. While There
            
        </Typography>
    },
    {
        logo: <Clock />,
        Heading: "Flexible Learning",
        Description: <Typography variant="subtitle2" align="center"
        >
            High Definition video is Video of Higher Resolution
            And Quality Than Standard Definition. While There
            
        </Typography>
    }
]

export const Courses = [
    {
        title: "Design",
        Heading: "Introduction to user research in UX Design",
        Price: "$15",
        image: faker.image.technics(),
        name: faker.name.fullName(),
        time : faker.date.recent()
    },
    {
        title: "Marketting",
        Heading: "Introduction to new Marketting audience",
        Price: "$32",
        image: faker.image.technics(),
        name: faker.name.fullName(),
        time : faker.date.recent()
    },
    {
        title: "Development",
        Heading: "Introduction to user research in UX Design",
        Price: "$55",
        image: faker.image.technics(),
        name: faker.name.fullName(),
        time : faker.date.recent()
    },
    {
        title: "Marketing",
        Heading: "Introduction to user research in UX Design",
        Price: "$45",
        image: faker.image.technics(),
        name: faker.name.fullName(),
        time : faker.date.recent()
    }, {
        title: "Marketing",
        Heading: "Introduction to user research in UX Design",
        Price: "$25",
        image: faker.image.technics(),
        name: faker.name.fullName(),
        time : faker.date.recent()
    }, 
    {
        title: "Design",
        Heading: "Introduction to user research in UX Design",
        Price: "$25",
        image: faker.image.technics(),
        name: faker.name.fullName(),
        time : faker.date.recent()
    },
]