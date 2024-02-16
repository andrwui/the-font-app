export const requestLocalFontsPermission = async (button: boolean): Promise<boolean> => {
  try {
    const permissionStatus = await navigator.permissions.query({
      name: 'local-fonts' as PermissionName,
    })
    // Query the permission status for local fonts

    // Check the current permission state
    if (permissionStatus.state === 'granted') {
      return true
    } else if (permissionStatus.state === 'prompt') {
      // Query the fonts to get the prompt
      if (button) {
        window.queryLocalFonts()
      } else {
        return false
      }
    } else if (permissionStatus.state === 'denied') {
      throw new Error('denied')
    }
    permissionStatus.onchange = () => {
      window.location.reload()
    }
    return false
  } catch (error) {
    console.error('Error requesting local fonts permission:', error)
    // Return a rejected promise to ensure the calling function can catch the error
    throw error
  }
}
