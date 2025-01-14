import { Toast, showToast } from "@raycast/api";
import { runAppleScript } from "./utils";

export default async () => {
  let script = `

        -- Name of the file to be opened
#        set filename to "~/Desktop/note.md"
#        set windowname to "note.md (~/Desktop) - NVIM"
        set filename to "~/Library/CloudStorage/Dropbox/Notes/note.md"
        set windowname to "note.md (~/Library/CloudStorage/Dropbox/Notes) - NVIM"

#       -- Set window bounds
#        set x0 to 2500
#        set y0 to 0 
#        set dx to 700
#        set dy to 900

        -- Set command to open the file and auto exit after done
        set sizeCmd to "open -g raycast://extensions/raycast/window-management/reasonable-size"
        -- Set command to open the file and auto exit after done
        set openCmd to "nvim -- " & filename & " &&exit"

        -- Check if iTerm is running
        tell application "System Events"
          -- some versions might identify as "iTerm2" instead of "iTerm"
          set isRunning to (exists (processes where name is "iTerm")) or (exists (processes where name is "iTerm2"))
        end tell

        tell application "iTerm"
          set hasNotes to exists window windowname 
          activate
          if isRunning and hasNotes then
            select first window where name is windowname
          else
#            if isRunning is false then
#              activate
#            end if
            set win1 to create window with default profile
#set bounds of win1 to {x0, y0, x0 + dx, y0 + dy}
            tell current session of current window
               write text sizeCmd
               write text openCmd
            end tell
          end if
        end tell

    `;

  try {
    const result = await runAppleScript(script);
    await showToast(Toast.Style.Success, "Done", result);
  } catch (err) {
    await showToast(Toast.Style.Failure, "Something went wrong");
  }
};
