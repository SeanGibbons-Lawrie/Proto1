export function changeLocation(locationDestination, setter) {
  setter(locationDestination)
  console.log(locationDestination)
}

export function changeEnemy(enemy, setter) {
  setter(enemy)
}

export function wait(ms) {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export function attack(attacker, receiver) {
  const receivedDamage = attacker.str
  // attacker.str - (attacker.level - receiver.level) * 1.25;

  const finalDamage = receivedDamage - receiver.str / 2

  return finalDamage
}

export function fight(playerStats, opponentStats) {
  let turn = 0
  while (playerStats.hp > 0) {
    const attacker = turn === 0 ? playerStats : opponentStats
    const receiver = turn === 0 ? opponentStats : playerStats
    const damage = attack(attacker, receiver)
    console.log(playerStats, opponentStats)
    turn === 0
      ? (playerStats.hp = (h) => (h - damage > 0 ? h - damage : 0))
      : (opponentStats.hp = (h) => (h - damage > 0 ? h - damage : 0)) // We don't want a negative HP.

    turn === 0 ? 1 : 0
  }
}
