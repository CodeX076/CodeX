// Dark Mode Toggle
const themeToggle = document.getElementById('darkModeToggle');

if (themeToggle) {
  themeToggle.addEventListener('change', () => {
    const isChecked = themeToggle.checked;
    document.documentElement.setAttribute(
      'data-theme',
      isChecked ? 'dark' : 'light'
    );
  });
}

// Vote Count Logic
const voteCounts = {
  1: 0, // Plastic ban
  2: 0  // Education budget
};

function vote(id) {
  voteCounts[id]++;
  const countSpan = document.getElementById(`voteCount${id}`);
  if (countSpan) {
    countSpan.innerText = voteCounts[id].toString();
  }
}

// Chart.js - Fund Visualization
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('fundChart');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Healthcare', 'Education', 'Infrastructure', 'Defense', 'Agriculture'],
        datasets: [{
          label: 'Funds (₹ in Crores)',
          data: [120, 180, 100, 220, 90],
          backgroundColor: [
            '#4a90e2',
            '#66bb6a',
            '#ffa726',
            '#ef5350',
            '#ab47bc'
          ],
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 50
            }
          }
        }
      }
    });
  }
});
