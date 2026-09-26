import {
  Search,
  Users,
  Bell,
  Menu,
  User,
  Settings,
  LogOut,
  Check,
} from "lucide-react";

import { useEffect, useRef, useState } from "react";

function Navbar({ onMenuClick }) {

  const [search, setSearch] = useState("");

  const [notificationOpen, setNotificationOpen] =
    useState(false);

  const [profileOpen, setProfileOpen] =
    useState(false);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New customer registered",
      time: "5 minutes ago",
      read: false,
    },
    {
      id: 2,
      title: "Payment received",
      time: "20 minutes ago",
      read: false,
    },
    {
      id: 3,
      title: "Weekly report generated",
      time: "1 hour ago",
      read: true,
    },
  ]);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);


  // =====================================
  // OUTSIDE CLICK
  // =====================================

  useEffect(() => {

    function handleClickOutside(event) {

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setNotificationOpen(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }

    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);


  // =====================================
  // SEARCH
  // =====================================

  function handleSearch(e) {

    setSearch(e.target.value);

  }


  // =====================================
  // MARK ALL READ
  // =====================================

  function markAllRead() {

    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );

  }


  // =====================================
  // MARK SINGLE READ
  // =====================================

  function markAsRead(id) {

    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              read: true,
            }
          : notification
      )
    );

  }


  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;


  return (
    <header
  className="
    fixed
    right-0
    top-0
    z-30
    h-[88px]
    border-b
    border-slate-200
    bg-white

    left-0
    lg:left-[300px]
  "
>

      <div
        className="
          flex
          h-full
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >


        {/* =====================================
            LEFT SIDE
        ===================================== */}

        <div className="flex items-center gap-4">


          {/* MOBILE MENU */}

          <button
            onClick={onMenuClick}
            className="
              rounded-lg
              p-2
              text-slate-600
              transition
              hover:bg-slate-100
              lg:hidden
            "
          >
            <Menu size={24} />
          </button>


          {/* SEARCH */}

          <div
            className="
              relative
              hidden
              w-[300px]
              md:block
              lg:w-[350px]
            "
          >

            <Search
              size={20}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search..."
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                py-2.5
                pl-10
                pr-4
                text-sm
                outline-none
                transition

                focus:border-indigo-500
                focus:bg-white
                focus:ring-2
                focus:ring-indigo-100
              "
            />

          </div>

        </div>


        {/* =====================================
            RIGHT SIDE
        ===================================== */}

        <div
          className="
            flex
            items-center
            gap-2
            sm:gap-4
          "
        >


          {/* USERS */}

          <button
            className="
              hidden
              rounded-lg
              p-2
              text-slate-500
              transition
              hover:bg-slate-100
              hover:text-slate-800
              sm:block
            "
          >
            <Users size={21} />
          </button>


          {/* =====================================
              NOTIFICATION
          ===================================== */}

          <div
            ref={notificationRef}
            className="relative"
          >

            <button
              onClick={() => {
                setNotificationOpen(
                  !notificationOpen
                );

                setProfileOpen(false);
              }}
              className="
                relative
                rounded-lg
                p-2
                text-slate-500
                transition
                hover:bg-slate-100
                hover:text-slate-800
              "
            >

              <Bell size={21} />

              {unreadCount > 0 && (
                <span
                  className="
                    absolute
                    right-1
                    top-1
                    flex
                    h-4
                    min-w-4
                    items-center
                    justify-center
                    rounded-full
                    bg-red-500
                    px-1
                    text-[9px]
                    font-bold
                    text-white
                  "
                >
                  {unreadCount}
                </span>
              )}

            </button>


            {/* NOTIFICATION DROPDOWN */}

            {notificationOpen && (

              <div
                className="
                  absolute
                  right-0
                  top-12
                  w-[340px]
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  shadow-xl
                "
              >

                {/* HEADER */}

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-slate-100
                    px-4
                    py-4
                  "
                >

                  <div>

                    <h3
                      className="
                        text-sm
                        font-semibold
                        text-slate-900
                      "
                    >
                      Notifications
                    </h3>

                    <p
                      className="
                        mt-1
                        text-xs
                        text-slate-400
                      "
                    >
                      You have {unreadCount} unread
                    </p>

                  </div>


                  <button
                    onClick={markAllRead}
                    className="
                      text-xs
                      font-medium
                      text-indigo-600
                      hover:text-indigo-700
                    "
                  >
                    Mark all read
                  </button>

                </div>


                {/* NOTIFICATIONS */}

                <div className="max-h-[300px] overflow-y-auto">

                  {notifications.map(
                    (notification) => (

                      <button
                        key={notification.id}
                        onClick={() =>
                          markAsRead(
                            notification.id
                          )
                        }
                        className={`
                          flex
                          w-full
                          items-start
                          gap-3
                          border-b
                          border-slate-100
                          px-4
                          py-4
                          text-left
                          transition
                          hover:bg-slate-50

                          ${
                            !notification.read
                              ? "bg-indigo-50/50"
                              : ""
                          }
                        `}
                      >

                        {/* DOT */}

                        <span
                          className={`
                            mt-1.5
                            h-2
                            w-2
                            shrink-0
                            rounded-full

                            ${
                              notification.read
                                ? "bg-slate-300"
                                : "bg-indigo-500"
                            }
                          `}
                        />


                        {/* TEXT */}

                        <div className="flex-1">

                          <p
                            className="
                              text-sm
                              font-medium
                              text-slate-800
                            "
                          >
                            {notification.title}
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              text-slate-400
                            "
                          >
                            {notification.time}
                          </p>

                        </div>


                        {notification.read && (
                          <Check
                            size={16}
                            className="text-green-500"
                          />
                        )}

                      </button>

                    )
                  )}

                </div>


                {/* FOOTER */}

                <button
                  onClick={() =>
                    setNotificationOpen(false)
                  }
                  className="
                    w-full
                    px-4
                    py-3
                    text-center
                    text-sm
                    font-medium
                    text-indigo-600
                    hover:bg-slate-50
                  "
                >
                  View all notifications
                </button>

              </div>

            )}

          </div>


          {/* =====================================
              PROFILE
          ===================================== */}

          <div
            ref={profileRef}
            className="relative"
          >

            <button
              onClick={() => {
                setProfileOpen(!profileOpen);
                setNotificationOpen(false);
              }}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-indigo-100
                text-sm
                font-bold
                text-indigo-600
                transition
                hover:ring-4
                hover:ring-indigo-100
              "
            >
              V
            </button>


            {/* PROFILE DROPDOWN */}

            {profileOpen && (

              <div
                className="
                  absolute
                  right-0
                  top-12
                  w-[220px]
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  shadow-xl
                "
              >

                {/* PROFILE */}

                <div
                  className="
                    border-b
                    border-slate-100
                    px-4
                    py-4
                  "
                >

                  <p
                    className="
                      text-sm
                      font-semibold
                      text-slate-900
                    "
                  >
                    Virendra Kumar
                  </p>

                  <p
                    className="
                      mt-1
                      truncate
                      text-xs
                      text-slate-400
                    "
                  >
                    virendra@gmail.com
                  </p>

                </div>


                {/* PROFILE LINK */}

                <button
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    px-4
                    py-3
                    text-sm
                    text-slate-600
                    hover:bg-slate-50
                  "
                >

                  <User size={18} />

                  Profile

                </button>


                {/* SETTINGS */}

                <button
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    px-4
                    py-3
                    text-sm
                    text-slate-600
                    hover:bg-slate-50
                  "
                >

                  <Settings size={18} />

                  Settings

                </button>


                {/* LOGOUT */}

                <button
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    border-t
                    border-slate-100
                    px-4
                    py-3
                    text-sm
                    text-red-500
                    hover:bg-red-50
                  "
                >

                  <LogOut size={18} />

                  Logout

                </button>

              </div>

            )}

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;