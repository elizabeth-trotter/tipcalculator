# Tip Calculator

This is my version of the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Peer Review](#peer-review)


---


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Desktop Screenshot

![Screenshot](image.png)

### Links

- Live Site URL: [Tip Calculator](https://tipcalculator-eosin.vercel.app/)

## My process

### Built with

- Next.js
- Tailwind CSS
- TypeScript
- Mobile-first workflow

### What I learned

- How to imprort fonts into Next.js layout.tsx
```
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: "700"
});
```

- How to work with radio buttons in the tsx
```
<input 
  type="radio" 
  name="percentage" 
  value="5%" 
  className="appearance-none" 
  onChange={() => handleRadioChange('5%')} 
  checked={selectedValue === '5%'} />
```

- How to use ternary operators for inline className styling
```
<label 
  className={`${selectedValue === '5%' ? 'bg-strongCyan' : 'bg-darkCyan'} 
  rounded flex justify-center items-center h-12 md:h-10 w-36 md:w-24 text-white 
  hover:bg-lightGrayCyan hover:text-darkCyan cursor-pointer`} >
```

## Peer Review

**Name:** Joseph Poncini **Date/ Time:** 4/3/2024 2:00 pm

**Comments:** Overall your site looks a lot like the prototype so good job! I noticed that I can change the value on the custom button by scrolling on it which I though was really cool. I only found a few areas that I think can be improved upon so I'll try to list them below in a somewhat organized fashion

- Interface:
  - The buttons after you click them should have the very dark cyan color. easy fix

- Organization
  - No need to change this since it's already working but for your buttons you have code that is really repetitive and in the future could probably be cleaned up by just making a button component and mapping through some sort of tip % value array

- Niche improvements:
  - technically you can't have a decimal value of people so you can restrict the peoples input to only be whole numbers, likewise the bill can be restricted down to values having at most two decimal points
  - I put a limit to how big of a number you can input on mine, you can do the same to prevent the container from stretching out past the screen if someone decided to type a really big number

