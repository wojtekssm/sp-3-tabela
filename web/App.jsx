import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const listaPracownikow = [
  { id: 1, imie: 'Anna', nazwisko: 'Kowalska', dzial: 'IT', pensja: 7200 },
  { id: 2, imie: 'Jan', nazwisko: 'Nowak', dzial: 'Sprzedaż', pensja: 5500 },
  { id: 3, imie: 'Katarzyna', nazwisko: 'Wiśniewska', dzial: 'Księgowość', pensja: 6100 },
  { id: 4, imie: 'Piotr', nazwisko: 'Wójcik', dzial: 'IT', pensja: 8000 },
  { id: 5, imie: 'Magdalena', nazwisko: 'Kowalczyk', dzial: 'Sprzedaż', pensja: 5300 },
  { id: 6, imie: 'Tomasz', nazwisko: 'Kamiński', dzial: 'Księgowość', pensja: 6400 },
  { id: 7, imie: 'Agnieszka', nazwisko: 'Lewandowska', dzial: 'IT', pensja: 7500 },
  { id: 8, imie: 'Paweł', nazwisko: 'Zieliński', dzial: 'Sprzedaż', pensja: 4900 },
  { id: 9, imie: 'Karolina', nazwisko: 'Szymańska', dzial: 'Księgowość', pensja: 5900 },
  { id: 10, imie: 'Michał', nazwisko: 'Woźniak', dzial: 'IT', pensja: 8200 },
  { id: 11, imie: 'Monika', nazwisko: 'Dąbrowska', dzial: 'Sprzedaż', pensja: 5100 },
  { id: 12, imie: 'Łukasz', nazwisko: 'Kozłowski', dzial: 'Księgowość', pensja: 6700 }
];

const [wpisaneNazwisko, setWpisaneNazwisko] = useState("")
const [wybranyDzial, setWybranyDzial] = useState("")

const listaPrzefiltrowanaPracownikow = listaPracownikow.filter( (pracownik) => {
    const szukana = wpisaneNazwisko.toLowerCase().trim()
    const pasujeNazwisko = pracownik.nazwisko.toLowerCase().includes(szukana)
    const pasujeDzial = wybranyDzial === "" || pracownik.dzial === wybranyDzial
    return pasujeNazwisko && pasujeDzial
})

const nazwiskoHandler = (e) => {
  setWpisaneNazwisko(e.target.value)
  sprawdz(listaPrzefiltrowanaPracownikow.length)
}

const dzialHandler = (e) => {
  setWybranyDzial(e.target.value)
  sprawdz(listaPrzefiltrowanaPracownikow.length)
}


const sprawdz = (wyniki) =>{
  console.log(`Wyniki: ${wyniki}`)
}

  return (
    <div>
      <h2>Pracownicy</h2>
      <div className='d-flex gap-2'>
        <div className="mb-3 w-100">
        <label htmlFor="szukaj" className="form-label">Szukaj:</label>
        <input type="text" className="form-control" id="szukaj" value={wpisaneNazwisko} onChange={nazwiskoHandler}/>
      </div>
      <div className="mb-3 w-100">
        <label htmlFor="dzial" className="form-label">Dział:</label>
        <select className="form-select" id="dzial" onChange={dzialHandler}>
          <option value="">Wszystkie</option>
          <option value="IT">IT</option>
          <option value="Sprzedaż">Sprzedaż</option>
          <option value="Księgowość">Księgowość</option>
        </select>
      </div>
      </div>

    <p className='fw-bold'>Liczba pracowników: {listaPrzefiltrowanaPracownikow.length}</p>

    {listaPrzefiltrowanaPracownikow.length > 1 ? (
      <table className="table table-striped">
      <thead className="table-dark">
        <tr><th scope="col">Imię</th><th scope="col">Nazwisko</th><th scope="col">Dział</th><th scope="col">Pensja</th></tr>
      </thead>
      <tbody>
        {listaPrzefiltrowanaPracownikow.map( (pracownik => (
          <tr key={pracownik.id}><td>{pracownik.imie}</td><td>{pracownik.nazwisko}</td><td>{pracownik.dzial}</td><td>{pracownik.pensja}</td></tr>
        )))}
      </tbody>
    </table>) : (<div className="alert alert-warning" role="alert">Brak pracowników spełniających kryteria</div>)}
  </div>
  )
}

export default App
