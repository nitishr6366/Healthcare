import { RiDashboardFill } from "react-icons/ri";
import { LuArrowUpDown } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { FaSquarePlus } from "react-icons/fa6";
import { BiStats } from "react-icons/bi";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";

import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

export default function App() {
  return (
    <div className="main">
      <Header />
      <Searchbar />
      <DashboardMainContent />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <Logo />
      <SideBar />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span className="logo-text1">Health</span>
      <span className="logo-text2">care.</span>
    </div>
  );
}
function SideBar() {
  return (
    <>
      <div className="sidebaroptions">
        <small>General</small>
        <SideBarOptions logo={<RiDashboardFill />} text={"Dashboard"} />
        <SideBarOptions logo={<LuArrowUpDown />} text={"History"} />
        <SideBarOptions logo={<SlCalender />} text={"Calender"} />
        <SideBarOptions logo={<FaSquarePlus />} text={"Appointments"} />
        <SideBarOptions logo={<BiStats />} text={"Statistics"} />
      </div>
      <div className="sidebaroptions">
        <small>Tools</small>
        <SideBarOptions logo={<IoChatbubbleEllipsesSharp />} text={"Chat"} />
        <SideBarOptions logo={<IoIosCall />} text={"Support"} />
      </div>
      <div id="sidebaroptions">
        <SideBarOptions logo={<IoIosSettings />} text={"Setting"} />
      </div>
    </>
  );
}
function SideBarOptions({ logo, text }) {
  return (
    <div className="contents">
      <span>{logo}</span>
      <span>{text}</span>
    </div>
  );
}

function Searchbar() {
  return (
    <div className="searchbar">
      <SearchBar />
      <DashBoardHeader />
      <Anatomy />
      <ActivityChart />
    </div>
  );
}
function SearchBar() {
  return (
    <div id="input">
      <input />
      <span className="searchicon">
        <FiSearch />
      </span>
      <span className="notificationicon">
        <IoMdNotifications />
      </span>
    </div>
  );
}
function DashBoardHeader() {
  return (
    <div className="dashboard">
      <h3>Dashboard</h3>
      <select>
        <option>
          <p>This week</p>
        </option>
      </select>
    </div>
  );
}
function Anatomy() {
  const range1 = {
    accentColor: "brown",
  };
  const range2 = {
    accentColor: "green",
  };
  const range3 = {
    accentColor: "#ee2400",
  };
  return (
    <div className="flex-container">
      <div className="flexitem1">
        <img
          src="https://news.flinders.edu.au/wp-content/uploads/2013/10/human.jpg"
          alt="anatomy"
        ></img>
      </div>
      <div className="flexitem2">
        <Cards
          color={range1}
          img={
            <img
              src="https://cdn.pixabay.com/photo/2021/10/09/12/36/lungs-6694030_1280.png"
              alt="lungs"
              style={{ height: "5vh" }}
            ></img>
          }
          text={"Lungs"}
        />
        <Cards
          color={range2}
          img={
            <img
              src="https://cdn.pixabay.com/photo/2014/05/21/14/18/tooth-349615_1280.png"
              alt="teeth"
              style={{ height: "5vh" }}
            ></img>
          }
          text="Teeth"
        />
        <Cards
          color={range3}
          img={
            <img
              src="https://cdn.pixabay.com/photo/2024/09/27/16/34/bone-9079454_1280.png"
              alt="bone"
              style={{ height: "5vh" }}
            ></img>
          }
          text="Bone"
        />
        <p id="text">
          Details{" "}
          <IoIosArrowRoundForward
            style={{ position: "relative", top: "20%, " }}
          />
        </p>
      </div>
    </div>
  );
}
function Cards({ img, text, color }) {
  const date = new Date().toDateString();
  return (
    <div className="cards">
      <div className="crdf">
        <span>{img}</span>
        <span>{text}</span>
      </div>
      <p>
        <small>Date : {date}</small>
      </p>
      <input style={color} type="range" min={0} max={100}></input>
    </div>
  );
}

function DashboardMainContent() {
  return (
    <div className="maincontent">
      <Profile />
      <Schedule />
      <Appointments />
      <UpcomingSchedules />
    </div>
  );
}

function Profile() {
  return (
    <div className="userprofile">
      <button className="userbutton">👦🏻</button>
      <button className="plusbutton">+</button>
    </div>
  );
}
function Schedule() {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  return (
    <div className="calender">
      <div className="calendar-header">
        <h2>October 2021</h2>
        <div className="nav-buttons">
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>

      <div className="calendar-grid">
        {days.map((day, i) => (
          <div key={i} className="day-header">
            {day}
          </div>
        ))}
        {dates.map((date, i) => (
          <div key={i} className="calendar-cell">
            <div className="date-number">{date}</div>
            {date === 28 ? (
              "-"
            ) : (
              <div className="time-tag time-blue">09:00</div>
            )}
            {date === 28 ? (
              <div className="time-tag time-purple">11:00</div>
            ) : (
              <div className="time-tag time-blue">10:00</div>
            )}
            {date === 26 ? (
              "-"
            ) : (
              <div className="time-tag time-blue">12:00</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
function Appointments() {
  return (
    <div className="appointments">
      <AppointmentCards
        test={"Dentist"}
        logo={
          <img
            src="https://cdn.pixabay.com/photo/2014/05/21/14/18/tooth-349615_1280.png"
            alt="tooth"
          ></img>
        }
        time={"09:00-11:00"}
        doctor={"Dr. cameron Williamson"}
      />

      <AppointmentCards
        test={"Physiotheraphy Appointment"}
        logo={"💪"}
        time="11:00-12:00"
        doctor={"Dr. Kevin Djones"}
      />
    </div>
  );
}
function UpcomingSchedules(){
  return <>
  <div className="upcomingschedule">
        <h3>The Upcoming Schedule</h3>
        <txt>On Thursday</txt>
      </div>
      <div className="scheduledcards">
        <AppointmentCards
          test={"Health checkup complete"}
          logo={"💉"}
          time={"11:00 Am"}
        />
        <AppointmentCards
          test={"Ophthalmologist"}
          logo={"👁️"}
          time={"14:00 Pm"}
        />
      </div>
      <txt>On Saturday</txt>
      <div className="scheduledcards">
        <AppointmentCards test={"Cardiologist"} logo={"❤️"} time="12:00 Am" />
        <AppointmentCards test={"Neurologist"} logo={"👨🏻‍⚕️"} time="16:00 Pm" />
      </div>
  </>
}

function AppointmentCards({ logo, time, doctor, test }) {
  return (
    <div className="appointmentcards">
      <div className="appointmentcardsflex">
        <p>{test}</p>
        <p>{logo}</p>
      </div>

      <small>{time}</small>

      <small>{doctor}</small>
    </div>
  );
}
function ActivityChart() {
  const data = [
    {
      name: "Mon",
      fl: -100,
      sl: 200,
      tl: 60,
      ffl: -100,
      ssl: 45,
    },
    {
      name: "Tue",
      fl: -100,
      sl: 200,
      tl: -60,
      ffl: 100,
      ssl: 45,
    },
    {
      name: "Wed",
      fl: -100,
      sl: 200,
      tl: 70,
      ffl: 105,
      ssl: -65,
    },
    {
      name: "Thu",
      fl: -100,
      sl: 200,
      tl: -75,
      ffl: -95,
      ssl: 45,
    },
    {
      name: "Fri",
      fl: -100,
      sl: 200,
      tl: 55,
      ffl: -80,
      ssl: -45,
    },
    {
      name: "Sat",
      fl: -100,
      sl: 200,
      tl: -55,
      ffl: +60,
      ssl: 45,
    },
    {
      name: "Sun",
      fl: -100,
      sl: 200,
      tl: 65,
      ffl: -98,
      ssl: -45,
    },
  ];

  return (
    <div className="activity-chart-container">
      <div className="activity">
        <h3>Activity</h3>
        <small>3 Appointments this week</small>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          barSize={4}
          data={data}
          className="chart"
          barGap={10}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            dataKey="name"
            className="x-axis"
            axisLine={false}
            tickLine={false}
          />
          {/* <YAxis />
          <Tooltip />
          <Legend /> */}
          <Bar dataKey="fl" stackId="b" fill="#b7bbc1" />
          <Bar dataKey="sl" stackId="b" fill="#b7bbc1" />
          <Bar dataKey="tl" fill="#3fd0e0" />
          <Bar dataKey="ffl" stackId="a" fill="#5b58de " />
          <Bar dataKey="fffl" stackId="a" fill="#3fd0e0" />
          <Bar dataKey="ssl" fill="#b7bbc1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
