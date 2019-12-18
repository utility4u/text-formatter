import React, { useEffect } from 'react';
import './App.css';
import formatText from './services/formatText';

function App() {
	useEffect(() => {
		formatText('16px Arial');
	});

	return (
		<div id="wrapper">
			<p className="formatedText">
				Uživatel má možnost vkládat hodnocení konkrétních registrovaných realitních makléřů, ale Společnost
				zakazuje urážet realitní makléře, jiné uživatele a jim blízké fyzické osoby, ať už pro jejich vyznání,
				tělesnou vlastnost, věk nebo jinou charakteristiku, která může porušovat rovnost, a vyjadřovat se
				rasisticky. Vulgarity jsou obecně nevhodné a je na posouzení Společnosti, zda jsou ještě
				snesitelné. V případě, že Uživatel vloží komentář, který uvedené nerespektuje je Společnost oprávněna
				jeho hodnocení (komentář) smazat a v případěo opakovaného poručení podmínek přístup Uživateli k webovému
				portálu zablokovat. e a e p e o e t t t t t t t t e a e p e o e t t t t t t t t e a e p e o e t t t t t t t t</p>
		</div>
	);
}

export default App;
