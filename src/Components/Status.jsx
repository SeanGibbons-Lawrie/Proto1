/* eslint-disable react/prop-types */
export default function Status({ playerStatus, setPlayerStatus }) {
  return (
    <div className="status">
      <div className="label">
        <label>
          {playerStatus.name}
          <br />
          Lv: {playerStatus.lv} &apos;Nobody&apos;
        </label>
      </div>
      {/*Lv:{level} '{title}' */}
      <div className="padding">
        <label className="label">
          HP: {playerStatus.hp} / {playerStatus.maxHp}
        </label>
      </div>
      <div className="padding">
        <label className="label">
          EXP: {playerStatus.exp} / {playerStatus.maxExp}
        </label>
      </div>
      <div className="padding">
        <label className="label">STR: {playerStatus.str}</label>
      </div>
    </div>
  )
}
