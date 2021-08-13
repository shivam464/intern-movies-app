import React, { useState } from 'react'
// import clear_icon from '../assets/images/icons/clear-icon.png'
import { Numberkeys } from '../Components/Numberkeys'
import { Alphabetkeys } from '../Components/Alphabetkeys'
import { Link, useHistory } from 'react-router-dom'




const Keyboard = ({ api_call, moviename,movies }) => {
    const [toggle_keyboard, settoggle_keyboard] = useState(false)
    let history = useHistory()
    const redirectpage = (event) => {
        event.preventDefault();

        if (moviename.trim().length > 0) {
            api_call(event)
            if (movies) {
                return history.push('/home');
            }else{
                history.push('/');
            }
        }
        else {
            history.push('/');
        }
    }

    return (
        <div class="key-board-box" id="show-numbers" >
            {!toggle_keyboard && (Numberkeys.map((Ndata) => {
                return (
                    <div class="key-board-row" key={Ndata.id}>
                        {Ndata.number1 && <span class="key"><button>{Ndata.number1}</button></span>}
                        {Ndata.number2 && <span class="key"><button>{Ndata.number2}</button></span>}
                        {Ndata.number3 && <span class="key"><button>{Ndata.number3}</button></span>}
                        {Ndata.number4 && <span class="key"><button>{Ndata.number4} </button></span>}
                        {Ndata.number5 && <span class="key"><button>{Ndata.number5} </button></span>}
                        {Ndata.number6 && <span class="key"><button>{Ndata.number6} </button></span>}
                        {Ndata.number7 && <span class="key"><button>{Ndata.number7} </button></span>}
                        {Ndata.image && <span class="arrow-change"><button><img src={Ndata.image} /></button></span>}
                        {Ndata.number8 && <span class="arrow-change show-alpabets"><button onClick={() => settoggle_keyboard(!toggle_keyboard)}>{Ndata.number8}</button></span>}
                        {Ndata.space_btn && <span class="space-clear"><button>{Ndata.space_btn}</button></span>}
                        {Ndata.clear_btn && <span class="space-clear"><button>{Ndata.clear_btn}</button></span>}
                        {Ndata.search_btn && <span class="search-btn" ><Link ><button onClick={redirectpage}>{Ndata.search_btn}</button></Link></span>}
                    </div>
                )
            }))}
            {toggle_keyboard && (Alphabetkeys.map((Cdata) => {
                return (
                    <div class="key-board-row" key={Cdata.id}>
                        {Cdata.char1 && <span class="key"><button>{Cdata.char1}</button></span>}
                        {Cdata.char2 && <span class="key"><button>{Cdata.char2}</button></span>}
                        {Cdata.char3 && <span class="key"><button>{Cdata.char3}</button></span>}
                        {Cdata.char4 && <span class="key"><button>{Cdata.char4} </button></span>}
                        {Cdata.char5 && <span class="key"><button>{Cdata.char5} </button></span>}
                        {Cdata.char6 && <span class="key"><button>{Cdata.char6} </button></span>}
                        {Cdata.char7 && <span class="key"><button>{Cdata.char7} </button></span>}
                        {Cdata.image && <span class="arrow-change"><button><img src={Cdata.image} /></button></span>}
                        {Cdata.btnNo && <span class="arrow-change show-alpabets"><button onClick={() => settoggle_keyboard(!toggle_keyboard)}>{Cdata.btnNo}</button></span>}
                        {Cdata.space_btn && <span class="space-clear"><button>{Cdata.space_btn}</button></span>}
                        {Cdata.clear_btn && <span class="space-clear" ><button>{Cdata.clear_btn}</button></span>}
                        {Cdata.search_btn && <span class="search-btn"  ><Link  ><button onClick={redirectpage}>{Cdata.search_btn}</button></Link></span>}
                    </div>
                )
            }))}




        </div>
    )
}

export default Keyboard
