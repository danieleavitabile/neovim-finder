import { Toast, showToast } from "@raycast/api";
import { runAppleScript } from "./utils";

export default async () => {
  let script = `

        # Name of the file to be opened
        set filename to "~/Desktop/note.md"

        # Set bounds of window
        set x0 to 2500
        set y0 to 22 
        set dx to 700
        set dy to 900

        # Open the file and auto exit after done
        set openCmd to "nvim -- " & filename & " &&exit"

        tell application "System Events"
            -- some versions might identify as "iTerm2" instead of "iTerm"
            set isRunning to (exists (processes where name is "iTerm")) or (exists (processes where name is "iTerm2"))
        end tell

        tell application "iTerm"
            activate
            set hasNoWindows to ((count of windows) is 0)
            if isRunning and hasNoWindows then
                set win1 to create window with default profile
                set bounds of win1 to {x0, y0, x0 + dx, y0 + dy}
            end if
            select first window

            tell the first window
            if isRunning and hasNoWindows is false then
                create tab with default profile
            end if
            tell current session to write text openCmd
            end tell
        end tell

    `;

  try {
    const result = await runAppleScript(script);
    await showToast(Toast.Style.Success, "Done", result);
  } catch (err) {
    await showToast(Toast.Style.Failure, "Something went wrong");
  }
};
