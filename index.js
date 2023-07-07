function distanceFromHqInBlocks(location)
{
    if (location === 43)
    {
        return 1;
    }
    else if (location === 50)
    {
        return 8;
    }
    else if (location < 42)
    {
        return 8;
    }

}

function distanceFromHqInFeet(location)
{
    return distanceFromHqInBlocks(location) * 264;

}

function distanceTravelledInFeet(start, destination)
{
    return (Math.abs(destination - start)) * 264;
}

function calculatesFarePrice(start, destination)
{
    const distance =  distanceTravelledInFeet(start,destination)
    {
        if (distance <= 400)
        {
            return 0
        }
        else if (distance > 400 && distance <= 2000)
        {
             return (distance - 400) * 0.02
        }
        else if (distance > 2000 && distance < 2500)
        {
            return 25 
        }
        else if (distance > 2500)
        {
            return "cannot travel that far"
        }
    }
}
