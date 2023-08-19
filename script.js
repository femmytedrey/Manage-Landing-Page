const parentContainers = document.querySelectorAll('.parent1, .parent2, .parent3, .parent4');
const circleIndicators = document.querySelector('.circle-indicators');

// Create circle indicators for each parent container
parentContainers.forEach(() => {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circleIndicators.appendChild(circle);
});

// Handle scroll event to update active circle
parentContainers.forEach((container, index) => {
  container.addEventListener('scroll', () => {
    console.log('Scroll event triggered for container', index);
    
    const scrollPos = container.scrollLeft;
    const containerWidth = container.clientWidth; // Use the current container's width
    console.log('scrollPos:', scrollPos);
    console.log('containerWidth:', containerWidth);
  });
});
