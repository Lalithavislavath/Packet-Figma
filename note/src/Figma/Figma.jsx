import { useState, useCallback, useMemo } from 'react';
import Sidebar from './Sidebar';
import Main from './Main'
import GroupModal from './GroupModel';
import './Figma.css'
function Figma() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [groupName, setGroupName] = useState('')
  const [groupColor, setGroupColor] = useState('')
  const [groups, setGroups] = useState([])
  const [selectedGroup, setSelectedGroup] = useState(null)
 
  const openModal = useCallback(() => {
    setModalOpen(true)
  }, [])
 
  const closeModal = useCallback(() => {
    setModalOpen(false)
    setGroupName(' ')
    setGroupColor(' ')
  }, [])
 
  const handleCreateGroup = useCallback(() => {
    if (groupName) {
      setGroups((Groups) => [
        ...Groups,
        { name: groupName, color: groupColor || ' white' },
      ])
      closeModal()
    }
  }, [groupName, groupColor, closeModal]);
 
  const availableColors = useMemo(() => ['#B38BFA', ' #FF79F2','#43E6FC', ' #F19576', '#0047FF','#6691FF'], [])
 
  return (
    <div className="pocketgroups">
      <Sidebar groups={groups} openModal={openModal} setSelectedGroup={setSelectedGroup} />
      <Main selectedGroup={selectedGroup}/>
      {isModalOpen && (
        <GroupModal
          groupName={groupName}
          setGroupName={setGroupName}
          groupColor={groupColor}
          setGroupColor={setGroupColor}
          availableColors={availableColors}
          handleCreateGroup={handleCreateGroup}
          closeModal={closeModal}/>
      )}
    </div>
  )
}
export default Figma;