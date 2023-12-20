import { FC, useState } from 'react';
import { useLanguage } from '../../main';
import './Languages.css';

interface LanguagesProps {}

const SwitchLanguages: FC<LanguagesProps> = () => {
  const { language, changeLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLanguageChange = (selectedLanguage: string) => {
    changeLanguage(selectedLanguage);
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown" onClick={toggleDropdown}>
      <button className="dropbtn">{language}</button>
      {isDropdownOpen && (
        <div id="myDropdown" className="dropdown-content">
          <ul>
            <li
              className="drawer-item"
              onClick={() => handleLanguageChange('EN')}
            >
              EN
            </li>
            <li
              className="drawer-item"
              onClick={() => handleLanguageChange('RU')}
            >
              RU
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SwitchLanguages;
