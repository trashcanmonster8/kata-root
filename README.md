# kata-root

Solution for [Root coding problem statement](https://gist.githubusercontent.com/dan-manges/1e1854d0704cb9132b74/raw/cb3370dad0042e5a3e96ef67489e15d1071a3a7a/Root.md).

## Problem Statement (Copied 2021-04-22)

Let's write some code to track driving history for people.

The code will process an input file. You can either choose to accept the input via stdin (e.g. if you're using Ruby `cat input.txt | ruby yourcode.rb`), or as a file name given on the command line (e.g. `ruby yourcode.rb input.txt`). You can use any programming language that you want. Please choose a language that allows you to best demonstrate your programming ability.

Each line in the input file will start with a command. There are two possible commands.

The first command is Driver, which will register a new Driver in the app. Example:

`Driver Dan`

The second command is Trip, which will record a trip attributed to a driver. The line will be space delimited with the following fields: the command (Trip), driver name, start time, stop time, miles driven. Times will be given in the format of hours:minutes. We'll use a 24-hour clock and will assume that drivers never drive past midnight (the start time will always be before the end time). Example:

`Trip Dan 07:15 07:45 17.3`

Discard any trips that average a speed of less than 5 mph or greater than 100 mph.

Generate a report containing each driver with total miles driven and average speed. Sort the output by most miles driven to least. Round miles and miles per hour to the nearest integer.

Example input:

```
Driver Dan
Driver Lauren
Driver Kumi
Trip Dan 07:15 07:45 17.3
Trip Dan 06:12 06:32 21.8
Trip Lauren 12:01 13:16 42.0
```

Expected output:

```
Lauren: 42 miles @ 34 mph
Dan: 39 miles @ 47 mph
Kumi: 0 miles
```

## Plan

1. Review [problem statement](#problem-statement).
2. Gather requirements.
3. Determine the order of implementations.
4. Develop the solution.
   1. Set up scripts.
   2. Use TDD.

### Requirements

#### Read in data from text file

* Text file format
  * Drivers will always be registered before trips are recorded.
  * Trips will always include drivers who are already registered.
* "Driver" will proceed the driver command.
* "Trip" will proceed the trip command.
* Text file entries are space delimited.

#### Registering a driver

* Drivers have a single word for a name.
* Names are capitalized.

#### Recording a trip

* Trips are always within a single day.
* Trips have a driver, start time, end time, and mileage
* End time is always within the same day as the start time
* A trip is invalid if the average speed is less than 5 mph or above 100 mph

#### Calculate metrics

##### Total miles driven

* Sum all the miles of a trip

##### Average speed 

* Calculate total time in hours
* Calculate average speed in mph

#### Output metrics

* Output totals for driver

### Decisions during development

* Write happy path and ignore many edge cases for now
* Assume text file will be well formed for now

## Started Development

See commit history for development of the features

### Decisions made during development

* Decided to handle happy path and not handle every error case.
  * Leads to cases where trips are ignored for no clear reason
  * better result would be to throw and catch exceptions for tracking
  * Examples
    * TODO: add links for examples of this pattern.