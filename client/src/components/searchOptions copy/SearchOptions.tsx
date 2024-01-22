import {useState} from 'react'

const SearchOptions = () => {
  const [trainingName, setTrainingName] = useState('');
  const [trainer, setTrainer] = useState('');

  const trainingNameOptions = ['Lila', 'Ruth', 'Daniel', 'Lola'];
  const trainerOptions = ['Yoga', 'Pilates', 'Wod', 'Boxing'];

  const filteredTrainingNameOptions = trainingNameOptions.filter((option) =>
    option.toLowerCase().includes(trainingName.toLowerCase())
  );

  const filteredTrainerOptions = trainerOptions.filter((option) =>
    option.toLowerCase().includes(trainer.toLowerCase())
  );
  return (
    <>
    <input
        list="trainingNames"
          type="text"
          name="trainingName"
          id="trainingName"
          placeholder="Training Name"
          onChange={(e) => setTrainingName(e.target.value)}
          style={{ color: 'black' }}
        />
       <datalist id="trainingNames">
          {filteredTrainingNameOptions.map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>
        <input type="text" onChange={(e) => setTrainer(e.target.value)} list="trainerOptions" name="trainer" id="trainer" placeholder="Trainer" />
        <datalist id="trainerOptions">
          {filteredTrainerOptions.map((option) => (
            <option key={option} value={option} />
          ))}
        </datalist>
    </>
  )
}

export default SearchOptions