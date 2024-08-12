import React from "react";

function footer() {
  return (
    <div>
      <footer class="bg-white rounded-lg shadow m-4">
        <div class="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
          <span class="text-sm text-center text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Navigation
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default footer;
