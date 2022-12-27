import { Chart } from 'chart.js/auto'

(async function() {
  const data = [
    { year: 2009, count: 6182 },
    { year: 2010, count: 6069},
    { year: 2011, count: 6493 },
    { year: 2012, count: 6529 },
    { year: 2013, count: 6564 },
    { year: 2014, count: 7219 },
    { year: 2015, count: 7467},
    { year: 2016, count: 7408},
    { year: 2017, count: 7574},
    { year: 2018, count: 8447 },
    { year: 2019, count: 8004},
    { year: 2020, count: 8471},
  ];

  new Chart(
    document.getElementById('Salary'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Salaries by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();