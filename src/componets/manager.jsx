import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Manager = () => {
  const ref = useRef();
  const passref = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [pass, setPass] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPass(JSON.parse(passwords));
    }
  }, []);
  const showPassword = () => {
    // alert("show pass");
    // console.log(ref.current.src[0])
    if (ref.current.src.includes("icons/eye.png")) {
      ref.current.src = "icons/eyecross.png";
      passref.current.type = "text";
    } else {
      ref.current.src = "icons/eye.png";
      passref.current.type = "password";
    }
  };

  const handleChange = (e) => {
    if(pass.filter((item) => item.id === e.target.id)[0]){
      console.log(e.target.id)
      setPass(pass.filter((item) => item.id !== e.target.id));
      localStorage.setItem(
      "passwords",
      JSON.stringify(pass.filter((item) => item.id != e.target.id))
    );
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    toast("Copied to clipboard!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  const savePassword = (e) => {
    console.log(e.target.name);
    if (
      form.site.length === 0 ||
      form.username.length === 0 ||
      form.password.length === 0
    ) {
      toast("Please Fill All Data", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    } else if (
      pass.filter((item) => form.site === item.site)[0] &&
      pass.filter((item) => form.password === item.password)[0] &&
      pass.filter((item) => form.username === item.username)[0]
    ) {
      // console.log(pass.filter(item=>form.site === item.site) && pass.filter(item=>form.password === item.password) && pass.filter(item=>form.username === item.username));
      toast("Password is already Existed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast("Password Saved", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setPass([...pass, { ...form,id:e.target.name}]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...pass, { ...form,id:e.target.name}])
      );
      }
      setForm({ site: "", password: "", username: "" });
  };

  const editPassword = (id) => {
    setForm(pass.filter((item) => item.id === id)[0]);
  };
  const deletePassword = (id) => {
    let conf = confirm("Are You Want To Delete The Password?");
    if (conf) {
      setPass(pass.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(pass.filter((item) => item.id != id))
      );
      toast("Password Deleted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div class="absolute inset-0 -z-10 h-full w-full bg-blue-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-full w-full rounded-full bg-blue-500  opacity-20 blur-[100px]"></div>
      </div>

      <div className="mx-auto flex flex-col justify-center items-center min-h-[81.6vh] my-4 max-w-4xl">
        <div className="text-4xl mx-auto font-bold text-center">
          <span className="text-blue-500 "> &lt;</span>
          <span className="outline-4">Pass</span>
          <span className="text-blue-500 ">OP/&gt;</span>
        </div>
        <div className="h-[0.1px] bg-black opacity-50 my-3 w-[50%] mx-auto"></div>
        <p className="text-center text-blue-700 text-lg">
          Your Password Manager
        </p>
        <div className="flex flex-col p-4 gap-5 items-center ">
          <input
            onChange={handleChange}
            value={form.site}
            placeholder="Enter Website URL"
            className="rounded border border-blue-500 w-full py-1 px-2 text-black"
            type="text"
            name="site"
            id={form.id}
          />
          <div className="md:flex w-full gap-10">
            <input
              onChange={handleChange}
              value={form.username}
              placeholder="Enter Username"
              className="border rounded my-3 border-blue-500 md:w-1/2 py-1 px-2 text-black"
              type="text"
              name="username"
              id={form.id}
            />
            <div className="relative md:w-1/2">
              <input
                ref={passref}
                onChange={handleChange}
                value={form.password}
                placeholder="Enter Password"
                className="border rounded md:w-full my-3 border-blue-500 text-black py-1 px-2"
                type="password"
                name="password"
                id={form.id}
              />
              <div
                className="absolute cursor-pointer my-3 top-1 right-0 md:right-0"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="mx-2"
                  width={25}
                  src="icons/eye.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            name= {uuidv4()}
            onClick={ e => {savePassword(e)}}
            className="flex justify-center items-center bg-blue-300 border  border-blue-900 px-4 py-2 gap-2 w-fit rounded hover:bg-blue-400"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        {pass.length === 0 && (
          <div className="text-xl font-bold"> No passwords to show</div>
        )}
        {pass.length !== 0 && (
          <table className="overflow-hidden table-auto rounded w-full">
            <thead className="bg-[#2F91E5]">
              <tr className="">
                <th className="text-center py-1 px-2">Site</th>
                <th className="text-center py-1 px-2">Username</th>
                <th className="text-center py-1 px-2">Password</th>
                <th className="text-center py-1 px-2">Operations</th>
              </tr>
            </thead>
            <tbody className="bg-[#CFE6FA]">
              {pass.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="text-center py-1 px-2">
                      <div className="flex justify-center items-center ">
                        <a href={item.site} target="_blank">
                          {item.site}
                        </a>
                        <div
                          className=" flex cursor-pointer mx-2"
                          onClick={() => {
                            copyText(item.site);
                          }}
                        >
                          <lord-icon
                            style={{
                              width: "23px",
                              height: "23px",
                              paddingTop: "3px",
                              paddingLeft: "3px",
                            }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="click"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>

                    <td className="text-center py-1 px-2">
                      <div className="flex justify-center items-center ">
                        <span>{item.username}</span>
                        <div
                          className=" flex cursor-pointer mx-2"
                          onClick={() => {
                            copyText(item.username);
                          }}
                        >
                          <lord-icon
                            style={{
                              width: "23px",
                              height: "23px",
                              paddingTop: "3px",
                              paddingLeft: "3px",
                            }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="click"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>

                    <td className="text-center py-1 px-2">
                      <div className="flex justify-center items-center ">
                        <span>·····</span>
                        <div
                          className=" flex cursor-pointer mx-2"
                          onClick={() => {
                            copyText(item.password);
                          }}
                        >
                          <lord-icon
                            style={{
                              width: "23px",
                              height: "23px",
                              paddingTop: "3px",
                              paddingLeft: "3px",
                            }}
                            src="https://cdn.lordicon.com/iykgtsbt.json"
                            trigger="click"
                          ></lord-icon>
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-1 px-2">
                      <span
                        className="cursor-pointer mx-1"
                        onClick={() => {
                          editPassword(item.id);
                        }}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/gwlusjdu.json"
                          trigger="hover"
                          style={{ width: "25px", height: "25px" }}
                        ></lord-icon>
                      </span>
                      <span
                        className="cursor-pointer mx-1"
                        onClick={() => {
                          deletePassword(item.id);
                        }}
                      >
                        <lord-icon
                          src="https://cdn.lordicon.com/skkahier.json"
                          trigger="hover"
                          style={{ width: "25px", height: "25px" }}
                        ></lord-icon>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Manager;
