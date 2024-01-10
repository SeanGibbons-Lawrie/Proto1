import { useEffect, useState } from 'react'
import { attack, wait } from '../shared/helpers'

export function useBattleSequence(sequence, playerStats, opponentStats) {
  const [turn, setTurn] = useState(0)
  const [playerHealth, setPlayerHealth] = useState(playerStats.hp)
  const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHp)

  useEffect(() => {
    const { turn } = sequence
    while (playerStats.hp > 0) {
      const attacker = turn === 0 ? playerStats : opponentStats
      const receiver = turn === 0 ? opponentStats : playerStats
      const damage = attack(attacker, receiver)
      turn === 0
        ? setOpponentHealth((h) => (h - damage > 0 ? h - damage : 0))
        : setPlayerHealth((h) => (h - damage > 0 ? h - damage : 0)) // We don't want a negative HP.
      wait(500)
      setTurn(turn === 0 ? 1 : 0)
    }
  }, [sequence, opponentStats, playerStats])

  return {
    turn,
    playerHealth,
    opponentHealth,
  }
}
