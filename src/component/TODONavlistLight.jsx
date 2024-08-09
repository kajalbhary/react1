import DONUTCHART from "../component/donutchart/DONUTCHART";
import TextCell1 from "../component/textcell/TextCell1";
import TextCell3 from "../component/textcell/TextCell3";
import styles from "./TODONavlistLight.module.css";
import { useEffect, useState } from "react";

const TODONavlistLight = (props) => {
  const [tasks, setTasks] = useState([])
  const [theme, setTheme] = useState('white')

  useEffect(() => {
    console.log("Pro", props.tasks);
    setTasks(props?.tasks)
  }, [props?.tasks]);

  
  useEffect(() => {
    document.body.style =  `background: ${theme};`;
  }, [theme]);

  const changeTheme = () => {
    if(theme === "white") {
      setTheme('#969393')
    } else {
      setTheme('white')
    }
  }

  // const color = 'white'
  // document.body.style = 'background: white;';

  return (
    <div className={styles.toDoNavlistLight} style={{backgroundColor : theme}}>
      <div className={styles.webAppNavBar}  style={{backgroundColor : theme}}>
        <div className={styles.container}>
          <img className={styles.menuIcon} alt="" src="/menu1.svg" />
          <div className={styles.logo}>
            <img
              className={styles.logomarkIcon}
              alt=""
              src="/logomark@2x.png"
            />
            <b className={styles.doit}>DoIt</b>
          </div>
        </div>
        <div className={styles.header}>
          <img className={styles.menuIcon} alt="" src="/search1.svg" />
          <img className={styles.menuIcon} alt="" src="/appgrid1.svg" />
          <img style={{cursor : "pointer"}} className={styles.menuIcon} alt="" src="/rimoonclearline.svg" onClick={changeTheme} />
          <span  style={{fontSize : "15px" , cursor :"pointer"}} onClick={props.handleLogout}>logout </span>
        </div>
        <img className={styles.dividerIcon} alt="" src />
      </div>

      <div className={styles.labelParent} style={{ position: "fixed", marginTop: "10%" , backgroundColor : theme}}>
        <div className={styles.label}>Hey, ABCD</div>
        <div className={styles.sidebar}>
          <div className={styles.sidePanelMenu} style={{ backgroundColor : theme }}>
            <div className={styles.menuItem} style={{ backgroundColor : theme }}>
              <img className={styles.menuIcon} alt="" src="/menu4.svg" />
              <div className={styles.label1}>All Tasks</div>
            </div>
            <div className={styles.menuItem1} style={{ backgroundColor : theme }}>
              <img className={styles.menuIcon} alt="" src="/calendar.svg" />
              <div className={styles.label1}>Today</div>
            </div>
            <div className={styles.menuItem} style={{ backgroundColor : theme }}>
              <img className={styles.menuIcon} alt="" src="/clock3.svg" />
              <div className={styles.label1}>Important</div>
            </div>
            <div className={styles.menuItem} style={{ backgroundColor : theme }}>
              <img className={styles.menuIcon} alt="" src="/clock4.svg" />
              <div className={styles.label1}>Planned</div>
            </div>
            
            <div className={styles.menuItem} style={{ backgroundColor : theme }}>
              <img className={styles.menuIcon} alt="" src="/clock5.svg" />
              <div className={styles.label1}>{`Assigned to me `}</div>
            </div>
          </div>
        </div>
        <div className={styles.sidebar1} style={{ backgroundColor : theme }}>
          <div className={styles.sidePanelMenu} style={{ backgroundColor : theme }}>
            <div className={styles.menuItem} style={{ backgroundColor : theme }}>
              <img className={styles.menuIcon} alt="" src="/menu5.svg" />
              <div className={styles.label1}>Add list</div>
            </div>
          </div>
        </div>
        <div className={styles.sidebar2} style={{ backgroundColor : theme }}>
          <div className={styles.sidePanelMenu2} style={{ backgroundColor : theme }}>
            <DONUTCHART
              {...props}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: 'green',
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '5px', // Adds space between the dot and the text
                  marginBottom: '0px'

                }}
              />
              <span>pending</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: '#1ab502',
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '5px', // Adds space between the dot and the text
                  marginBottom: '0px'
                }}
              />
              <span>completed</span>
            </div>
          </div>

          {/* <div> */}


        </div>
        <img className={styles.profileIcon} alt="" src="/profile@2x.png" />
      </div>
      <div className={styles.container1} style={{ paddingLeft: "20%" , backgroundColor : theme }}>
        <div className={styles.mainContent} >
          <div className={styles.table}  style={{ backgroundColor : theme }}>
            <div className={styles.column1}>
              <div className={styles.title}>
                <div className={styles.label7}>
                  <div className={styles.label8} style={{ paddingBot: "10px" }}>To Do</div>
                  <img
                    className={styles.menuIcon}
                    alt=""
                    src="/caretdown1.svg"
                  />
                </div>
              </div>
              <TextCell1
                {...props}
                claritynotificationLine="/claritynotificationline1.svg"
                birepeat="/birepeat1.svg"
                iconoircalendar="/iconoircalendar1.svg"
              />
              <div
                style={{
                  // paddingTop :"10%",
                  position: 'fixed', // Keeps the container in a fixed position
                  top: '35%', // Adjusts the position from the top
                  left: 350, // Aligns the container to the left edge
                  right: 0, // Stretches the container to the right edge
                  bottom: 0, // Extends to the bottom
                  overflowY: 'auto', // Makes the content scrollable
                  paddingLeft: '20px', // Adds padding if needed
                  paddingRight: '20px', // Adds padding if needed
                }}              >
                {
                  tasks?.map((task) => {
                    if (!task.completed) {
                      return <>
                        <TextCell3
                          {...props}
                          id={task.id}
                          strike={false}
                          title={task.title}
                          checkSmall={false}
                          phstar={task.important ?  "/phstar4.svg" : "/phstar3.svg"} 
                          propWidth="365.5px"
                          propBorder="2px solid #1e1e1e"
                          propColor="#1b281b"
                        />
                      </>
                    }
                  })
                }
                <div className={styles.completed}>Completed</div>
                {
                  tasks?.map((task) => {
                    if (task.completed) {
                      return <>
                        <TextCell3
                          {...props}
                          id={task.id}
                          strike={true}
                          title={task.title}
                          checkSmall={true}
                          phstar={task.important ?  "/phstar4.svg" : "/phstar3.svg"} 
                          propWidth="365.5px"
                          propBorder="2px solid #1e1e1e"
                          propColor="#1b281b"
                        />
                      </>
                    }
                  })
                }
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TODONavlistLight;
