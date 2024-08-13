import PersonalDefaultPage from "./PersonalDefaultPage";
import {color_grey_light, color_red_default, color_white} from "../../constants/colors";
import {useSelector} from "react-redux";
import {useState} from "react";
import {OnestBoldDefault, OnestBoldMed} from "../../components/styled/TextComponents";
import {BsDownload, BsEmojiFrown} from "react-icons/bs";


const SearchBar = ({searchValue, setSearchValue}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <input style={{
                height: 45,
                width: "100%",
                backgroundColor: color_white,
                borderRadius: 10,
                border: `1px solid ${color_grey_light}`
            }} placeholder={"   Введите запрос..."} value={searchValue} onChange={(event) => setSearchValue(event.target.value)}>
            </input>
        </div>
    )
}

const LibraryFileBlock = ({libraryFileData}) => {
    return (
        <div style={{
            width: 190,
            height: 226,
            borderRadius: 20,
            display: "flex",
            flexDirection: "column",
            padding: 15,
            gap: 25,
            backgroundColor: color_white,
            alignItems: "center"
        }}>
            <img style={{
                width: 160,
                height: 141,
                borderRadius: 10,
            }} src={libraryFileData.image} alt={"fileImage"}/>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <OnestBoldDefault>{libraryFileData.name}</OnestBoldDefault>
                <div style={{cursor: "pointer"}}><BsDownload style={{color: color_red_default, fontSize: 25}}/></div>
            </div>
        </div>
    )
}

const NoFilesPlaceholder = ({searchValue}) => {
    const searchNotFoundAnythingText = "По вашему запросу ничего не нашлось. Попробуйте сформулировать иначе."
    const noFilesText = "В библиотеке отсутствуют файлы."

    return (
        <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                width: 662,
                height: 207,
                backgroundColor: color_white,
                borderRadius: 20,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                alignContent: "center",
                textAlign: "center",
                // gap: 40,
                fontSize: 30
            }}>
                <BsEmojiFrown/>
                <OnestBoldMed>{searchValue === "" || searchValue === null? noFilesText : searchNotFoundAnythingText}</OnestBoldMed>
            </div>
        </div>
    )
}

export const LibraryPage = () => {
    const libraryFiles = useSelector(state => state.libraryFiles);

    const [searchValue, setSearchValue] = useState("")
    return (
        <PersonalDefaultPage>
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                gap: 40
            }}>
                <SearchBar setSearchValue={(value)=>setSearchValue(value)} searchValue={searchValue}/>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 30,
                    height: "100%",
                    width: "100%"
                }}>
                    {libraryFiles.filter(el=>{
                         if(searchValue === "" || searchValue === null) return true
                            return el.name.toLowerCase().includes(searchValue.toLowerCase())
                    }).length === 0 ? <NoFilesPlaceholder searchValue={searchValue}/>
                        :
                        libraryFiles.filter(el=>{
                             if(searchValue === "" || searchValue === null) return true
                                return el.name.toLowerCase().includes(searchValue.toLowerCase())
                        }).map(el=><LibraryFileBlock libraryFileData={el}/>)
                    }
                </div>
            </div>
        </PersonalDefaultPage>
    )
}