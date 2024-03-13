const ctx = document.querySelector('.chart-area canvas').getContext('2d');

// Data for your inventory items (replace with your actual data)
const data = {
  labels: ['Item1', 'Item2', 'Item3'],
  datasets: [{
    data: [30, 50, 20], // Replace with your inventory quantities
    backgroundColor: [
      'rgba(54, 162, 235, 0.2)', // Primary blue (adjust alpha for transparency)
      'rgba(255, 99, 132, 0.2)', // Success green
      'rgba(50, 205, 50, 0.2)',  // Info blue
    ],
    borderColor: [
      'rgba(54, 162, 235, 1)',
      'rgba(255, 99, 132, 1)',
      'rgba(50, 205, 50, 1)',
    ],
    borderWidth: 1
  }]
};

// Chart configuration options
const config = {
  type: 'pie',
  data: data,
  options: {
    responsive: true, // Maintain aspect ratio on resize
    maintainAspectRatio: false, // Set to false to control width and height in options
    legend: {
      display: false, // Hide legend (matches your HTML)
    },
    tooltips: {
      enabled: true, // Enable tooltips
      callbacks: {
        label: function(tooltipItem, data) {
          const label = data.labels[tooltipItem.index];
          const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          const percent = Math.floor((value / data.total) * 100);
          return `${label}: ${value} (${percent}%)`;
        }
      }
    }
  }
};

// Create the chart
new Chart(ctx, config);
