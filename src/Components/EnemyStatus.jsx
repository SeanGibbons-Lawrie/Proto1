export default function EnemyStatus(enemyStatus, setEnemyStatus) {
  return (
    <div className="combat">
      <div className="label">
        <label>
          {enemyStatus.name}
          <br />
          Lv: {enemyStatus.lv} &apos;Mechanical&apos;
        </label>
      </div>
      {/*Lv:{level} '{title}' */}
      <div className="padding">
        <label className="label">
          HP: {enemyStatus.hp} / {enemyStatus.maxHp}
        </label>
      </div>
      <div className="padding">
        <label className="label">STR: {enemyStatus.str}</label>
      </div>
    </div>
  )
}
