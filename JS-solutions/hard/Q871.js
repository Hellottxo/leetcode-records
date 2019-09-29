/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
  var counts = 0;
  function getCounts(target,startFuel,stations) {
      let surplus = target - startFuel;
      if(surplus <= 0) {
          return ;
      }
      const arr = stations.filter(e=>e[0] <= startFuel);
      if(arr.length == 0) {
          counts = -1;
          return ;
      }else {
          let max = arr[0][1];
          let index = 0;
          for(let i = 0; i < arr.length; i++) {
              if(arr[i][1] > max) {
                  max = arr[i][1];
                  index = i;
              }
          }
          stations.splice(index,1);
          for(let i = 0; i < stations.length; i++) {
              stations[i][0] = stations[i][0] - startFuel;
          }
          target = surplus;
          startFuel = arr[index][1];
          counts++;
          return getCounts(target,startFuel,stations);
      }   
  }         
  getCounts(target,startFuel,stations);
  console.log(counts);
  return counts;
};